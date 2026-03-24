import React from 'react'
const tabButtons = ["All", "Active", "Completed"]
export const Tab = () => {

  return (
    <div className='flex gap-2'>
{tabButtons.map((element,key)=> 
<button
className='h-[32px] rounded-[2px] text-[14px] bg-gray-200 text-gray-700 font-medium transition-colors hover:bg-blue-600 hover:text-white '
key={key}
>
{element}
</button>
)}
    </div>
  )
}
