import React from "react";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Action to handle form submission
export const action = async ({ request }) => {
  const formData = await request.formData();

  const itemData = Object.fromEntries(formData.entries());

  try {
    await customFetch.post("/CItems", itemData);
    toast.success("Item added successfully");
    return redirect("/AdminDashboard/item");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to add item");
    return error;
  }

  return null;
};

function AddcompanyItem() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="bg-white w-full flex items-center justify-center flex-col min-h-screen mb-10">
      <div
        className="bg-white px-10 py-20 rounded w-2/3 overflow-auto"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="font-semibold text-sky-600 text-3xl text-center">
          ADD ITEM
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Item Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Item Name"
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium">Limit</label>
            <input
              type="text"
              name="limit"
              id="limit"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Limit (e.g., 55kg)"
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium">Description</label>
            <textarea
              name="description"
              id="description"
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1"
              placeholder="Item Description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className={`bg-sky-500 text-white font-bold py-4 rounded w-full hover:bg-sky-700 ${
                isSubmitting ? "opacity-50" : ""
              }`}
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

export default AddcompanyItem;
