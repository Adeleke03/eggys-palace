import React from "react";
import brandLogo from "../assets/nav-logo.svg";
import MyButton from "../components/MyButton";
import Input from "../components/Input";

const ForgotPwd = () => {
  return (
    <>
      <main className="bg-[#2F2F2F] h-screen flex flex-col text-center  md:text-start justify-center items-center">
        <section className="">
          <div className="flex justify-center mb-6">
            <img src={brandLogo} alt="brand-logo" className="w-[49px]" />
          </div>
          <h1 className="text-[#FBFBFB] text-[32px] font-[500] ">
            Forgot Password?
          </h1>
          <p className="font-[400] text-[20px] text-[#FBFBFB]">
            No worries, we’ll send you instruction to help
          </p>
        </section>
        <form className="mt-4 ">
          <Input placeholder='Email' />
          <div className="mt-4">

          <MyButton
            text="Reset Password"
            className="w-[350px] font-[500] text-[20px] md:w-[400px] h-[56px]"
          />
          </div>
        </form>
      </main>
    </>
  );
};

export default ForgotPwd;
