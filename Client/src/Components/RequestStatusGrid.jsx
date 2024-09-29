import React from 'react'
import {IoArchiveSharp } from 'react-icons/io5'

export default function RequestStatusGrid() {
  return ( 
  <div className='flex gap-4 w-full'>
    <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-500'>
            <IoArchiveSharp  className="text-2xl text-white"/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Request</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>20</strong>
            </div>
        </div>
    </BoxWrapper>

    <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoArchiveSharp  className="text-2xl text-white"/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Pending Request</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>20</strong>
            </div>
        </div>
    </BoxWrapper>

    <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
            <IoArchiveSharp  className="text-2xl text-white"/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Aproved Request</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>20</strong>
            </div>
        </div>
    </BoxWrapper>

    <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red'>
            <IoArchiveSharp  className="text-2xl text-white"/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Rejected Request</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>20</strong>
            </div>
        </div>
    </BoxWrapper>
</div>
)
}

function BoxWrapper({ children}){
return  <div className='bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center'>{children}</div>
}