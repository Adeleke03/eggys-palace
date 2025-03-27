import React from 'react'

const Input = ({name , ...rest}) => {
  return (
    <input {...rest} name={name}   className='bg-[#201F1E] w-full h-[43px] ps-4 outline-none rounded-[6px] placeholder:text-[#FBFBFB] text-[#FBFBFB] text-[16px] font-[400]'/>
  )
}

export default Input