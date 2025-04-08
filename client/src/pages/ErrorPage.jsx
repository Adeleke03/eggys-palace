import React from 'react';
import { useNavigate } from "react-router-dom";
import errorImg from "../assets/rafiki.png"

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <main className='wrapper bg-[#2F2F2F] text-white text-[32px] flex justify-center h-screen items-center flex-col'>
    

      <figure className='flex justify-center items-center' >
        <img src={errorImg} alt="" />
      </figure>
        <h3>Oops! Looks like you’ve wandered into the void.</h3>
      <h4 onClick={() => navigate(-1)} role='btn'  className='underline cursor-pointer'>Go back before things get weird</h4>
      
    </main>
    </>
  )
}

export default ErrorPage