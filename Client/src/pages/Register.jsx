import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import { FormRow, NavBar } from "../Components/index";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import signup from "../assets/Images/signup.svg";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Register successfull");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-background">
        {/* <!--Card Container--> */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl shadow-black rounded-2xl md:flex-row md:space-y-0 md:mb-15 md:p-0 border border-black  ">
          {/* <!--Left side--> */}
          <div className="p-6 md:p-10 md:w-[28rem]">
            {/* <!--top content--> */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Register</h2>

            <Form method="post">
              <FormRow
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
              />
              <FormRow
                type="text"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
              />
              <FormRow
                type="text"
                name="location"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
              />
              <FormRow
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
              />
              <FormRow
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "
              />

              {/* <!--Middle conten--> */}
              <div className="flex flex-col items-center justify-between  space-y-6 md:flex-row">
                <div className=" text-cyan-700">
                  are you already a <br /> member ? <br /> <br />
                  <Link to="/login"> Log in</Link>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-500 flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                  disabled={isSubmitting}
                >
                  <span className="text-black">
                    {isSubmitting ? "Registering.." : "Register"}
                  </span>
                </button>
              </div>
            </Form>

            {/* <!--Border--> */}
            <div className="mt-12 border-b border-b-gray-300"></div>
          </div>

          {/* <!--right side--> */}
          <img src={signup} alt className="rounded-2xl md:max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default Register;
