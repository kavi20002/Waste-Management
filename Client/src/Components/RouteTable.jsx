import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoBuild, IoTrashSharp } from 'react-icons/io5';
import { useAllRoutes } from '../pages/Route'; // Ensure this path is correct
import customFetch from '../utils/customFetch';
import { Link } from 'react-router-dom';

export default function RouteTable() {
    const { data, refetch } = useAllRoutes(); //kavidu
    const [showConfirm, setShowConfirm] = useState({ visible: false, id: null });
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

    // Handle showing the confirmation modal
    const openConfirmModal = (id) => {
        setShowConfirm({ visible: true, id });
    };

    // Handle closing the confirmation modal
    const closeConfirmModal = () => {
        setShowConfirm({ visible: false, id: null });
    };

    const handleDelete = async (id) => {
        try {
            await customFetch.delete(`/routePath/deleteRoutePath/${id}`);
            toast.success("Route deleted successfully!");
            refetch();  // Call refetch directly after deleting
        } catch (error) {
            toast.error("Failed to delete route");
            console.error("Delete error", error);
        } finally {
            closeConfirmModal();
        }
    };

    // Filter data based on search term
    const filteredData = data.filter((route) =>
        route.CustomerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.ContactNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route._id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    return (
        <div className="overflow-x-auto bg-white border border-gray-200">
            {/* Search Input */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search by Route Id, Customer Name, or Contact Number"
                    className="w-full px-4 py-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
                />
            </div>

            <table className="min-w-[1000px] w-full text-gray-700">
                <thead>
                    <tr>
                        <th>Route Id</th>
                        <th>Customer Name</th>
                        <th>Contact Number</th>
                        <th>Pickup Path</th>
                        <th>Arrive Time</th>
                        <th>Arrive Date</th>
                        <th>Vehicle</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Check if filteredData is empty */}
                    {(!filteredData || filteredData.length === 0) ? (
                        <tr>
                            <td colSpan="9" className="py-4 text-center">
                                <label>No Items to display</label>
                            </td>
                        </tr>
                    ) : (
                        filteredData.map((route) => (
                            <tr key={route._id}>
                                <td>{route._id}
                                    <div className='text-gray-300'>
                                        request Id :
                                        <p>{route.RequestId}</p>
                                    </div>
                                </td>
                                <td>{route.CustomerName}</td>
                                <td>{route.ContactNumber}</td>
                                <td>
                                    <a href={route.PickupPath} target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                    title={route.PickupPath}>
                                        {route.PickupPath}
                                    </a>
                                </td>
                                <td>{route.ArriveTime}</td>
                                <td>{route.ArriveDate}</td>
                                <td>{route.Vehicle}</td>
                                <td>{route.Status}</td>
                                <td>
                                    <div className='flex flex-row gap-1'>
                                        <Link to={`../editRoute/${route._id}`}>
                                            <button className='px-4 py-2 text-white bg-orange-500 border-none rounded shadow-md outline-none select-none hover:bg-orange-600'>
                                                <IoBuild />
                                            </button>
                                        </Link>
                                        <button
                                            className='px-4 py-2 text-white border-none rounded shadow-md outline-none select-none bg-red hover:bg-red-600'
                                            onClick={() => openConfirmModal(route._id)}
                                        >
                                            <IoTrashSharp />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {/* Confirmation Modal */}
            {showConfirm.visible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-6 bg-white rounded shadow-lg">
                        <p className="mb-4 text-gray-700">
                            Are you sure you want to delete this route?
                        </p>
                        <div className="flex justify-between">
                            <button
                                onClick={() => handleDelete(showConfirm.id)}
                                className="px-4 py-2 text-white transition-colors duration-200 rounded bg-red hover:bg-red-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={closeConfirmModal}
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
