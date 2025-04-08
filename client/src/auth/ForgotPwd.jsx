import React from "react";
import brandLogo from "../assets/nav-logo.svg";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { forgotPasswordSchema } from "../utils/ValidationSchema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPwd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPwd = async (data) => {
    try { 
      const  req = await fetch("http://localhost:4040/api/auth/forgot-password",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const res = await req.json();
      console.log(res);
      if (!res.success) {
        toast.error(res.errMsg)
      }
      if (res.success) {
        toast.success(res.message)
      }
      
    } catch (error) {}
  };
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
        <form className="mt-4" onSubmit={handleSubmit(handleForgotPwd)}>
          <Input
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <p className="text-red-600">{errors.email?.message}</p>
          <div className="mt-4">
            <MyButton
              text="Request Password Request"
              className="w-[350px] font-[500] text-[20px] md:w-[400px] h-[56px]"
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default ForgotPwd;