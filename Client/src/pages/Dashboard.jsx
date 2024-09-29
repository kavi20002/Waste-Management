import React from "react";
import { useLoaderData } from "react-router-dom";
import { useDashbordContext } from "../pages/DashboardLayout";
import dimage from "../assets/Images/d-image.svg";
import { FaUser, FaDollarSign, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/RItems");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Dashboard() {
  const { user } = useDashbordContext();
  console.log(user);
  const { data } = useLoaderData(); // Access the loaded data here
  console.log(data);
  return (
    <div>
      <div className="px-6 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-emerald-300 flex items-center justify-between">
        {" "}
        {/* Add justify-between */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-gray-600">We're glad to have you here.</p>
        </div>
        <img src={dimage} alt="Dashboard Image" className="w-36 h-36" />{" "}
        {/* Remove mr-4 */}
      </div>

      {/* Quick Links Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mt-6">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <div className="flex justify-around">
          {" "}
          {/* Equally separate links */}
          <a
            href="/profile"
            className="text-blue-500 hover:underline flex flex-col items-center"
          >
            {" "}
            {/* Vertical layout for each link */}
            <FaUser className="text-4xl mb-2" /> {/* Bigger icon */}
            My Profile
          </a>
          <a
            href="/earn-money"
            className="text-blue-500 hover:underline flex flex-col items-center"
          >
            <FaDollarSign className="text-4xl mb-2" />
            Earn Money
          </a>
          <a
            href="/waste-items"
            className="text-blue-500 hover:underline flex flex-col items-center"
          >
            <FaTrash className="text-4xl mb-2" />
            Waste Items
          </a>
        </div>
      </div>

      {/* RItem Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold mb-4">My Waste Items</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.rItems.map((item) => (
              <tr key={item._id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.status}</td>
                {/* Add more table cells to display other item properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
