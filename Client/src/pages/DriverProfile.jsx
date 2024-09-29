import { Form } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { FormRow } from "../Components";
import { Link, useNavigation, useLoaderData } from "react-router-dom"; // useLoaderData will replace useOutletContext

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

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return { user: data.user }; // Return user from the data object
  } catch (error) {
    console.error(error);
    return null; // Handle error if needed
  }
};

export default function DriverProfile() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useLoaderData(); // Get user data from the loader

  return (
    <div>
      <div className="flex items-center justify-center">
        {/* Card Container */}
        <div className="relative m-6 space-y-10 bg-white border border-black shadow-2xl rounded-2xl">
          <h2 className="mt-4 mb-5 font-mono text-4xl font-bold text-center">
            Driver Profile
          </h2>
          <div className="flex">
            {/* Left Side (User Info) */}
            <div className="flex flex-col items-center border p-4 w-[40%]">
              <div className="mb-4">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="profile"
                    className="object-cover w-48 h-48 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="object-cover w-48 h-48 rounded-full" />
                )}
              </div>
              <h3 className="text-2xl font-semibold">
                {user.name} {user.lastName}
              </h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">{user.location}</p>
            </div>

            {/* Right Side (Form) */}
            <div className="flex items-center justify-center flex-1 border">
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

                <div className="flex justify-end col-span-2">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
