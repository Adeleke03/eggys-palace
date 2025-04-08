import React from 'react';
import  { useContext,useState } from "react";
import PayNowSummary from "../features/checkout/PayNowSummarry"
import CheckoutForm from '../features/checkout/CheckoutForm';

const Checkout = () => {
  return (
    <div className="bg-[#2F2F2F] text-white wrapper grid lg:grid-cols-3 gap-[20px] ">
      <CheckoutForm/>
      <PayNowSummary/>
    </div>
  )
}

export default Checkout
