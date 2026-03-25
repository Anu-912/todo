"use client"
import React from 'react'
export const Tab = ({filter,setFilter}) => {
const tabButtons = ["All", "Active", "Completed"]
  return (
    <div className='flex gap-2'>
{tabButtons.map((tab) => 
<button
  key={tab}
  onClick={() => setFilter(tab.toLowerCase())}
className={`h-[32px] rounded-[2px] text-[14px] bg-gray-200 text-gray-700 font-medium transition-colors 
${ filter === tab.toLowerCase()
  ? 'bg-blue-600 text-white'
  : 'bg-gray-100 text-gray-600'}`} 
  >
{tab}
</button>
)}
    </div>
  )
}
