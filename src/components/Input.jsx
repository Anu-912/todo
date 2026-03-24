import React from 'react'

export const Input = () => {
  return (
    <div className='flex gap-2 w-full'>
<input type='text' className='w-[200px] h-[40px] rounded-[8px] border border-gray-300 bg-white text-[16px] text-gray-700 outline-none '>
</input>
<button className='w-[70px] h-[40px] bg-blue-600 text-white text-[16px] font-medium rounded-[8px]'>
Add
</button>
    </div>
  )
}
