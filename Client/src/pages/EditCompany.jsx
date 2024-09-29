import React from "react";
import { Form, useLoaderData, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/Company/${params.id}`);
    return data.company; // Assuming your API returns company object inside 'company'
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error fetching company data.");
    return redirect("/AdminDashboard/company");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const companyData = Object.fromEntries(formData.entries());

  try {
    await customFetch.patch(`/Company/${params.id}`, companyData); // Update API endpoint as necessary
    toast.success("Company updated successfully");
    return redirect("/AdminDashboard/company");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error updating company.");
    return error;
  }
};

function EditCompany() {
  const company = useLoaderData();

  return (
    <div className="bg-white w-full flex items-center justify-center flex-col min-h-screen mb-10">
      <div
        className="bg-white px-10 py-20 rounded w-2/3 overflow-auto"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="font-semibold text-sky-600 text-3xl text-center">
          Edit Company
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={company.name}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Company Name"
              readOnly
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={company.email}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Company Email"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              defaultValue={company.phone}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              defaultValue={company.address}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Company Address"
              required
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Company Type</label>
            <select
              name="companytype"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              defaultValue={company.companytype}
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
              id="stockLimit"
              defaultValue={company.stocklimit}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Stock Limit"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-sky-500 text-white font-bold py-4 rounded w-full hover:bg-sky-700"
            >
              Update Company
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditCompany;
