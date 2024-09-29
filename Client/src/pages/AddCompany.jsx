import React from "react";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const companyData = Object.fromEntries(formData.entries());

  try {
    await customFetch.post("/Company", companyData);
    toast.success("Company added successfully");
    return redirect("/AdminDashboard/Company");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to add company");
    return error;
  }
};

function AddCompany() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="bg-white w-full flex items-center justify-center flex-col min-h-screen mb-10">
      <div
        className="bg-white px-10 py-20 rounded w-2/3 overflow-auto"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="font-semibold text-sky-600 text-3xl text-center">
          ADD COMPANY
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Company Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Address"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Company Type</label>
            <select
              name="companytype"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              required
            >
              <option value="plastic">Plastic</option>
              <option value="metal">Metal</option>
              <option value="glass">Glass</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Stock Limit</label>
            <input
              type="text"
              name="stocklimit"
              id="stocklimit"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Stock Limit"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-sky-500 text-white font-bold py-4 rounded w-full hover:bg-sky-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddCompany;
