import { Form, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const loader = async ({ params }) => {
  try{
    const { data } = await customFetch(`/waste/retriveSpecificCollectedWaste/${params.id}`);
    return data;
  } catch (error){
    toast.error(error?.response?.data?.msg || "Failed to load data");
    return redirect("/DriverDashboard/collected-waste");
  }
}

export const action = async ({ request, params}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.put(`/waste/updateCollectedWaste/${params.id}`, data);

    if (response.status === 200){
      toast.success("Waste updated successfully");
      return redirect("../collected-waste");
    } else {
      throw new Error("Update failed with status code: " + response.status);
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

export default function EditDailyWaste() {
  const today = new Date().toISOString().split("T")[0];

  const waste  = useLoaderData();

  if(!waste) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mb-10 bg-white">
      <div
        className="w-2/3 px-10 py-20 overflow-auto rounded-lg bg-sidebar"
        style={{ maxHeight: "90vh" }}
      >
        <h3 className="text-3xl font-semibold text-center text-green-600">
          Edit Collected Waste
        </h3>

        <Form method="post">
          <div className="mt-8">
            <label className="text-lg font-medium">Customer ID</label>
            <input
              type="text"
              name="CustomerId"
              defaultValue={waste?.CustomerId || ''}
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Customer ID"
              readOnly={true}
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Customer Name</label>
            <input
              type="text"
              name="CustomerName"
              defaultValue={waste?.CustomerName || ''}
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Customer Name"
              readOnly={true}
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Price</label>
            <input
              type="text"
              name="Price"
              defaultValue={waste?.Price || ''}
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Price"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Weight</label>
            <input
              type="text"
              name="Weight"
              defaultValue={waste?.Weight || ''}
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              placeholder="Weight"
            />
          </div>
          <div className="mt-8">
            <label className="text-lg font-medium">Waste Category</label>
            <select
              name="WasteCategory"
              defaultValue={waste?.WasteCategory || ''}
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
            >
              <option value="Plastic">Plastic</option>
              <option value="Metal">Metal</option>
              <option value="Glass">Glass</option>
              <option value="Organic">Organic</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-lg font-medium">Collected Date</label>
            <input
              type="date"
              name="CollectedDate"
              className="w-full p-3 mt-1 border-2 border-gray-100 rounded-xl"
              value={waste?.CollecteDate || today}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2 mt-4">
            <button
              type="submit"
              className="w-32 py-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
