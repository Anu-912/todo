"use client"
import React from 'react'

export const Input = ({setInputValue}) => {
  
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  
  return (
<input onChange={handleChange} type='text' className='w-[255px] h-[40px] rounded-[8px] border border-gray-300 bg-white text-[16px] text-gray-700 outline-none px-2 '>
</input>

  )
}

