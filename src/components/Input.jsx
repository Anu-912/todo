"use client"
import React from 'react'

export const Input = ({setInputValue, InputValue}) => {
  
  return (
<input 
value={InputValue}
onChange={(e) => setInputValue(e.target.value)} 
placeholder='Add a new task...'
type='text'
 className='w-[255px] h-[40px] rounded-[8px] border border-gray-300 bg-white text-[16px] text-gray-700 outline-none px-2 '>
</input>

  );
};

