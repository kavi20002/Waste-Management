import React from 'react'
import RequestStatus from '../utils/RequestStatus'

const recentRequestData = [
    {
        requestId: '123',
        customerName: 'dasun',
        requestDate: '2024-08-19',
        type: 'Iron',
        requestQuentity: '5KG',
        address: 'kirimetimulla, thelijjawila',
        currentStatus: 'pending'
    },
    {
        requestId: '456',
        customerName: 'jinad',
        requestDate: '2024-07-19',
        type: 'plastic',
        requestQuentity: '2KG',
        address: 'kirimetimulla, thelijjawila',
        currentStatus: 'pending'
    }
]


export default function RecentRequest() {
  return (
    <div className='bg-white px-4  pb-4 rounded-sm border border-gray-200 w-full'>
        <strong className='text-gray-700 font-medium'>Recent Request</strong>

        <div className='mt-3'>
            <table className='w-full text-gray-700'>
                <thead>
                    <tr>
                        <th>Request Id</th>
                        <th>Customer Name</th>
                        <th>Request Date</th>
                        <th>Request Type</th>
                        <th>Quentity</th>
                        <th>Request Address</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {recentRequestData.map((request)=>(
                    <tr key={request.requestId}>
                        <td>{request.requestId}</td>
                        <td>{request.customerName}</td>
                        <td>{request.requestDate}</td>
                        <td>{request.type}</td>
                        <td>{request.requestQuentity}</td>
                        <td>{request.address}</td>
                        <td>{RequestStatus(request.currentStatus)}</td>
                        <td>
                            <button className='bg-green-500 mr-3 text-white px-4 py-2 hover:bg-green-700 rounded shadow-md outline-none border-none select-none'>
                                Aprove
                            </button>
                            <button className='bg-red text-white px-4 py-2 hover:bg-red-700 rounded shadow-md outline-none border-none select-none'>
                                Reject
                            </button>
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>

        </div>
    </div>
  )
}
