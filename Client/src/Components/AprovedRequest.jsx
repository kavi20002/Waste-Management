import React from 'react'

const aproveRequestData = [
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

export default function AprovedRequest() {
  return (
    <div className='bg-white px-4  pb-4 rounded-sm border border-gray-200 w-full'>
        <strong className='text-gray-700 font-medium'>Aproved Request</strong>

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {aproveRequestData.map((request)=>(
                    <tr key={request.requestId}>
                        <td>{request.requestId}</td>
                        <td>{request.customerName}</td>
                        <td>{request.requestDate}</td>
                        <td>{request.type}</td>
                        <td>{request.requestQuentity}</td>
                        <td>{request.address}</td>
                        <td>
                            <button className='bg-sky-500 mr-3 text-white px-4 py-2 hover:sky-green-700 rounded shadow-md outline-none border-none select-none'>
                                ADD ROUTE
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
