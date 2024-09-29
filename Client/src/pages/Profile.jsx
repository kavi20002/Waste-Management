import React from "react";
import { Link, useNavigation, useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import { FormRow } from "../Components";
import profileImg from "../assets/profile/profile.jpg";
import { useLoaderData } from "react-router-dom";
import { useDashbordContext } from "./DashboardLayout";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { FaUserCircle } from "react-icons/fa";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("File size should be less than 0.5mb");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }

  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  console.log(user);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <div className="flex items-center justify-center">
        {/* <!--Card Container--> */}
        <div className="relative   m-6 space-y-10 bg-white shadow-2xl  rounded-2xl  border border-black ">
          <h2 className="font-mono mb-5 text-4xl font-bold text-center mt-4">
            My Profile
          </h2>
          <div className="flex">
            {/* left div */}
            <div className="flex flex-col items-center border p-4 w-[40%]">
              <div className="mb-4">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="profile"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-48 h-48 rounded-full object-cover" />
                )}
              </div>
              <h3 className="text-2xl font-semibold">
                {user?.name} {user?.lastName}
              </h3>
              <p className="text-sm text-gray-500"> {user.email} </p>
              <p className="text-sm text-gray-500"> {user.location} </p>
            </div>

            <div className="flex justify-center items-center border flex-1">
              <Form
                method="post"
                className="grid grid-cols-2 gap-4 p-6"
                encType="multipart/form-data"
              >
                <FormRow
                  type="text"
                  name="name"
                  defaulyValue={user?.name}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  labelClass="text-xl text-gray-700 font-bold capitalize"
                />
                <FormRow
                  type="text"
                  name="lastName"
                  defaulyValue={user?.lastName}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  labelClass="text-xl text-gray-700 font-bold capitalize"
                />
                <FormRow
                  type="text"
                  name="location"
                  defaulyValue={user?.location}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  labelClass="text-xl text-gray-700 font-bold capitalize"
                />
                <FormRow
                  type="email"
                  name="email"
                  defaulyValue={user?.email}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  labelClass="text-xl text-gray-700 font-bold capitalize"
                />

                <div className="col-span-2">
                  <label htmlFor="avatar" className="block">
                    Select Profile Picture (max 0.5mb)
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                  />
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "submitting..." : "submit"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// <div className="p-6 md:p-10 md:w-[28rem]">
// {/* <!--top content--> */}
// <h2 className="font-mono mb-5 text-4xl font-bold">Register</h2>

{
  /* <Form method="post">
  <FormRow
    type="text"
    name="name"
    defaulyValue="Dasun"
    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
  />
  <FormRow
    type="text"
    name="lastName"
    defaulyValue="Tharuka"
    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
  />
  <FormRow
    type="text"
    name="location"
    defaulyValue="Matara"
    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
  />
  <FormRow
    type="email"
    name="email"
    defaulyValue="Dasun@gmail.com"
    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
  />
  <FormRow
    type="password"
    name="password"
    defaulyValue="123"
    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
  /> */
}

//   {/* <!--Middle conten--> */}
//   <div className="flex flex-col items-center justify-between  space-y-6 md:flex-row">
//     <div className="font-thin text-cyan-700">
//       are you already a member ? <br />
//       <Link to="/login"> Log in</Link>
//     </div>

//     <button
//       type="submit"
//       className="w-full md:w-auto bg-green-500 flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
//     >
//       <span className="text-black">Register</span>
//     </button>
//   </div>
// </Form>

// {/* <!--Border--> */}
// <div className="mt-12 border-b border-b-gray-300"></div>
// </div>
// </div>
