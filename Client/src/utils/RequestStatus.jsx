import React from 'react'

export default function RequestStatus(status) {
 switch(status){
    case 'pending':
        return(
            <span className='capitalize py-1 px-2 rounded-md  text-sky-300'>
                {status.replaceAll('_',' ').toLowerCase()}
            </span>
        )
     case 'conform':
        return(
            <span className='capitalize py-1 px-2 rounded-md text-xs text-green-500'>
                {status.replaceAll('_',' ').toLowerCase()}
            </span>
        )
    case 'cancle':
         return(
            <span className='capitalize py-1 px-2 rounded-md text-xs text-red-500'>
                {status.replaceAll('_',' ').toLowerCase()}
            </span>
        )
    default:
        return(
            <span className='capitalize py-1 px-2 rounded-md text-xs text-gray-500'>
                {status.replaceAll('_',' ').toLowerCase()}
            </span>
        )
 }
}
