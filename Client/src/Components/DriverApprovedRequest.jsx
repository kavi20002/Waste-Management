import { useAllDriverRequest } from "../pages/DailyWaste";
import React, { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function DriverApprovedRequest() {
  const { data, refetch, isLoading, isError } = useAllDriverRequest();
  const [showConfirm, setShowConfirm] = useState({ visible: false, type: '', id: null });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      refetch();
      setRefresh(false);
    }
  }, [refresh, refetch]);

  const handleRefresh = () => {
    setRefresh(true);
  };

  const handleApprove = async (id) => {
    try {
      const response = await customFetch.put(`/routePath/updateRoutePath/${id}`, { Status: 'approved' });
      if (response.status === 200) {
        toast.success('Request approved successfully');
        setShowConfirm({ visible: false, type: '', id: null });
        handleRefresh(); // Trigger data refresh
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'An error occurred during approval.');
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await customFetch.put(`/routePath/updateRoutePath/${id}`, { Status: 'rejected' });
      if (response.status === 200) {
        toast.success('Request rejected successfully');
        setShowConfirm({ visible: false, type: '', id: null });
        handleRefresh(); // Trigger data refresh
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'An error occurred during rejection.');
    }
  };

  // Filter out scheduled routes
  const approvedRoute = data?.filter(route => route.Status === 'approved') || [];


  // Loading, Error, No Data handling
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return (
    <div className="w-full px-4 pt-3 pb-4 bg-white border border-gray-200 rounded-sm">
      <strong className="text-xl font-medium text-green-600"> Approved Driver Request</strong>

      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>Pickup Path</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {approvedRoute.length > 0 ? (
              approvedRoute.map((route) => (
                <tr key={route._id} className="hover:bg-gray-100">
                  <td>{route.CustomerId}</td>
                  <td>{route.CustomerName}</td>
                  <td>{route.ContactNumber}</td>
                  <td>
                    <a
                      href={route.PickupPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {route.PickupPath}
                    </a>
                  </td>
                  <td>{route.Status}</td>
                  <td className="flex flex-col gap-2">
                  <Link to={`/DriverDashboard/add-daily-waste?customerId=${route.CustomerId}&customerName=${route.CustomerName}`}>
                    <button className='px-4 py-2 text-white bg-blue-500 border-none rounded shadow-md outline-none select-none hover:bg-blue-600'>
                        ADD WASTE
                    </button>
                  </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center">No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showConfirm.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded shadow-lg">
            <p className="mb-4 text-gray-700">
              Are you sure you want to {showConfirm.type} this request?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  showConfirm.type === 'approve' ? handleApprove(showConfirm.id) : handleReject(showConfirm.id);
                }}
                className="px-4 py-2 text-white transition-colors duration-200 bg-green-500 rounded hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm({ visible: false, type: '', id: null })}
                className="px-4 py-2 text-white transition-colors duration-200 bg-gray-500 rounded hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
