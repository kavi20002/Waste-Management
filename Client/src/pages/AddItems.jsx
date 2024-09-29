import React from "react";
import { FormRow } from "../Components";
import { useOutletContext } from "react-router-dom";
import { RITEM_CATEGORY, RITEM_STATUS } from "../../../Utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const fromData = await request.formData();
  const file = fromData.get("itemPhoto");
  if (file && file.size > 500000) {
    toast.error("File size should be less than 0.5mb");
    return null;
  }

  try {
    await customFetch.post("/RItems", fromData);
    toast.success("Item added successfully");
    return redirect("/dashboard/all-Items");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }

  return null;
};

const AddItems = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className=" shadow-md rounded-lg  flex flex-col justify-center items-center min-h-screen bg-gray-200 ">
      <h4 className="font-mono mb-5 text-4xl font-bold text-center mt-8 text-bla">
        Add Waste Item
      </h4>

      <Form
        method="post"
        className="w-full  p-6 bg-gray-200 rounded-lg "
        encType="multipart/form-data"
      >
        <div className="space-y-6">
          <FormRow
            type="text"
            name="name"
            label="Name"
            className=" border-2 w-2/6 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            labelClass="block text-gray-700 font-bold mb-2"
          />
          <FormRow
            type="text"
            name="description"
            label="Description"
            className="border-gray-300 border-2 w-5/6 h-20 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            labelClass="block text-gray-700 font-bold mb-2"
          />
          <FormRow
            type="text"
            name="Location"
            label="Location"
            defaulyValue={user?.location}
            className="border-gray-300  border-2 w-3/6 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            labelClass="block text-gray-700 font-bold mb-2"
          />
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Category
            </label>
            <select
              name="category"
              className="border-gray-300 border-2 w-1/5 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            >
              {Object.values(RITEM_CATEGORY).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* Hidden status field remains as is */}
          <FormRow
            type="number"
            name="weight"
            labelText="Weight (Kg)"
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            labelClass="block text-gray-700 font-bold mb-2"
          />
          <div>
            <label
              htmlFor="itemPhoto"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Picture (max 0.5mb)
            </label>
            <input
              type="file"
              id="itemPhoto"
              name="itemPhoto"
              accept="image/*"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg"
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline   
 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddItems;
