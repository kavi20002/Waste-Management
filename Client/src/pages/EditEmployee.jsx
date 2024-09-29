import React from "react";
import { Form, useLoaderData, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/employees/${params.id}`);
    console.log(data);
    return data.employee;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-items");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();

  const employeeData = Object.fromEntries(formData.entries());

  try {
    await customFetch.patch(`/employees/${params.id}`, employeeData);
    toast.success("Employee edited successfully");
    return redirect("/AdminDashboard/staf");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function EditEmployee() {
  const employee = useLoaderData();

  return (
    <div className="bg-white w-full flex items-center justify-center flex-col min-h-screen mb-10">
      <div
        className="bg-white px-10 py-20 rounded w-2/3 overflow-auto"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="font-semibold text-sky-600 text-3xl text-center">
          Update EMPLOYEE
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Employee ID</label>
            <input
              type="text"
              name="EmployeeId"
              id="EmployeeId"
              value={employee.EmployeeId}
              readOnly
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
              value={employee.Name}
              readOnly
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
              defaultValue={employee.Email} // Access the property directly
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
              defaultValue={
                new Date(employee.JoinDate).toISOString().split("T")[0]
              }
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              readOnly
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Telephone No</label>
            <input
              type="text"
              name="phone"
              id="phone"
              defaultValue={employee.phone}
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
              defaultValue={employee.Street}
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
              defaultValue={employee.City}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="City"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Postal Code</label>
            <input
              type="text"
              name="PostalCode"
              defaultValue={employee.PostalCode}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Postal Code"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Type</label>
            <select
              name="Type"
              className="w-full border-2 border-gray-50 rounded-xl p-3 mt-1"
              defaultValue={employee.Type}
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
              Update
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditEmployee;
