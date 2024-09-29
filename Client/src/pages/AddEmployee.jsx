import React from "react";
import { FormRow } from "../Components";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const employeeData = Object.fromEntries(formData.entries());

  try {
    await customFetch.post("/employees", employeeData);
    toast.success("Employee added successfully");
    return redirect("/AdminDashboard/staf");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }

  return null;
};

function AddEmployee() {
  const today = new Date().toISOString().split("T")[0];

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="bg-white w-full flex items-center justify-center flex-col min-h-screen mb-10">
      <div
        className="bg-white px-10 py-20 rounded w-2/3 overflow-auto"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="font-semibold text-sky-600 text-3xl text-center">
          ADD EMPLOYEE
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Employee ID</label>
            <input
              type="text"
              name="EmployeeId"
              id="EmployeeId"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Employee ID"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Name"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Email"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Join Date</label>
            <input
              type="date"
              name="JoinDate"
              id="JoinDate"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              defaultValue={today}
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Telephone No</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Telephone No"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Street</label>
            <input
              type="text"
              name="Street"
              id="Street"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Street"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">City</label>
            <input
              type="text"
              name="City"
              id="City"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="City"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Postal Code</label>
            <input
              type="text"
              name="PostalCode"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Postal Code"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Type</label>
            <select
              name="Type"
              className="w-full border-2 border-gray-50 rounded-xl p-3 mt-1"
            >
              <option value="Driver">Driver</option>
              <option value="Collector">Collector</option>
              <option value="Admin">Admin</option>
              <option value="Supervisor">Supervisor</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-sky-500 text-white font-bold py-4 rounded w-full hover:bg-sky-700"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddEmployee;
