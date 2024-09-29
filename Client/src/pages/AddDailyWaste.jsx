import { Form, redirect,  useSearchParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import React from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();

  try{
    await customFetch.post('waste/addCollectedWaste', Object.fromEntries(formData));
    toast.success('Waste Added Successfully');
    return redirect("../add-daily-waste");
  } catch (error){
    console.error(error); 
    toast.error(error?.response?.data?.msg || 'An error occurred');
    return redirect("../add-daily-waste");
  }
}

export default function AddDailyWaste() {
  const today = new Date().toISOString().split("T")[0];  
  const [searchParams] = useSearchParams();
  const customerId = searchParams.get("customerId");  
  const customerName = searchParams.get("customerName");  

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mb-10 bg-white">
      <div className="w-2/3 px-10 py-20 overflow-auto rounded-lg bg-sidebar" style={{ maxHeight: "90vh" }}>
        <h3 className="text-3xl font-semibold text-center text-green-600">Daily Collected Waste</h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="customerId">Customer ID</label>
            <input
              type="text"
              id="customerId"
              name="CustomerId"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              value={customerId || ""}
              placeholder="Customer ID"
              readOnly
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName" 
              name="CustomerName"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              value={customerName || ""}
              placeholder="Customer Name"
              readOnly
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="Price"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Price"
              required
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="weight">Weight</label>
            <input
              type="number"
              id="weight"  
              name="Weight"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Weight"
              required
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="wasteCategory">Waste Category</label>
            <select
              id="wasteCategory" 
              name="WasteCategory"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              required
            >
              <option value="Plastic">Plastic</option>
              <option value="Metal">Metal</option>
              <option value="Glass">Glass</option>
              <option value="Organic">Organic</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-lg font-medium" htmlFor="collectedDate">Collected Date</label>
            <input
              type="date"
              id="collectedDate"  
              name="CollectedDate"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              value={today}
              required
            />
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full py-4 font-bold text-white bg-green-500 rounded hover:bg-green-700">
              ADD
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
