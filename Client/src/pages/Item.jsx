import React from "react";
import { IoPencilSharp, IoTrashSharp, IoTrashBinSharp } from "react-icons/io5";
import { useLoaderData, Link } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { Form } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/CItems"); // Assuming this fetches the list of items
    console.log(data);
    return { items: data.Items }; // Returning the fetched items data
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to load Items");
    return { items: [] }; // Return an empty array in case of error
  }
};

export default function Item() {
  const { items } = useLoaderData(); // Fetching the items from the loader data

  return (
    <>
      <Link to={"../add-CItem"}>
        <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded shadow-md outline-none border-none select-none flex items-center">
          <IoTrashBinSharp className="mr-2" />
          Add Item
        </button>
      </Link>

      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex flex-wrap justify-center">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Limit:</span> {item.limit}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Description:</span>{" "}
                    {item.description}
                  </p>

                  <div className="flex justify-end space-x-4">
                    <Link to={`../edit-CItem/${item._id}`}>
                      <button className="flex items-center px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                        <IoPencilSharp className="mr-2" />
                        Edit
                      </button>
                    </Link>
                    <Form method="post" action={`../delete-CItem/${item._id}`}>
                      <button className="bg-red text-white px-4 py-2 hover:bg-red-600 rounded shadow-md outline-none border-none select-none">
                        <IoTrashSharp />
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items found</p>
          )}
        </div>
      </div>
    </>
  );
}
