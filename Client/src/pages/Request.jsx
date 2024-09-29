import React from 'react'
import RequestStatusGrid from '../Components/RequestStatusGrid'
import AprovedRequest from '../Components/AprovedRequest'

export default function Request() {
  return (
    <div className='flex flex-col gap-4'>
        <RequestStatusGrid />

        <div className='flex flex-row gap-4 w-full'>
          <AprovedRequest />
        </div>
    </div>
  )
}
