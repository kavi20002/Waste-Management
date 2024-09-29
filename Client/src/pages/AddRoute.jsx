import React from 'react'

export default function AddRoute() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
    <div className='bg-white px-10 py-20 rounded'>
      <h3 className='font-semibold text-3xl text-center'>Add Route</h3>
      
      <div className='mt-8'>
        <label className='text-lg font-medium'>Path</label>
        <input
          type='text'
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          placeholder='Enter Path'
        />
      </div>
      
      <div className='mt-4'>
        <label className='text-lg font-medium'>Arrive Time</label>
        <input
          type='text'
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          placeholder='Enter Time'
        />
      </div>
      
      <div className='mt-4'>
        <label className='text-lg font-medium'>Arrive Date</label>
        <input
          type='text'
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          placeholder='Enter Date'
        />
      </div>
      
      <div className='mt-4'>
        <label className='text-lg font-medium'>Vehicle</label>
        <input
          type='text'
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          placeholder='Enter Vehicle'
        />
      </div>

      <div className='mt-4'>
        <button className='bg-green-500 text-white font-bold py-4 rounded w-full hover:bg-green-700'>SUBMIT</button>
      </div>
      
    </div>
  </div>
  
  )
}
