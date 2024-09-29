import React from 'react'
import AdminStatusGrid from '../Components/AdminStatusGrid'
import RecentRequest from '../Components/RecentRequest'

export default function Dashbord() {
  return (
    <div className='flex flex-col gap-4'>
        <AdminStatusGrid />

        <div className='flex flex-row gap-4 w-full'>
          <RecentRequest />
        </div>
    </div>
    
  )
}
