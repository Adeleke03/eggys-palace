import React, { useState } from 'react';
import Input from '../components/Input';
import MyButton from "../components/MyButton";
import {Link} from "react-router-dom";
import visibilityOn from "../assets/visibility_on.svg";
import visibilityOff from  "../assets/visibility_off.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/ValidationSchema";
const SignUp = ({switchToSignIn}) => {
   const [isReveal, setIsReveal] = useState(false)
   const [isReveal2, setIsReveal2] = useState(false)
    function togglePwd(){
      setIsReveal((prev)=> !prev)
    }
    function togglePwd2(){
      setIsReveal2((prev)=> !prev)
    }
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(signUpSchema),
    })
    const onSubmit = (data) => console.log(data)
  return (
    <>
    <main>
        <div className="text-[#FBFBFB]">
          <h6 className="text-[#FBFBFB] font-[500] text-[26px] pt-8">
          Create Account
          </h6>
          <p className="text-[14px] font-[400] pb-6 ">Let’s get you started so you can start joining and creating events </p>
        </div>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>

          <Input type="email" placeholder="Email" name="email" {...register("email")} />
          <p className="text-red-600">{errors.email?.message}</p>

          </div>
          <div>

          <Input type="text" placeholder="First name" name="firstname" {...register("firstName")} />
          <p className="text-red-600">{errors.firstName?.message}</p>

          </div>
          <div>

          <Input type="text" placeholder="Last name" name="lastname" {...register("lastName")} />
          <p className="text-red-600">{errors.lastName?.message}</p>

          </div>
          <div className="relative w-full">

          <Input type={isReveal ? "text" : "password"} placeholder="Password" name="password" {...register("password")}/>
          <img className=" absolute top-2.5  left-[90%]" src={isReveal ? visibilityOff : visibilityOn} alt="toggle-password-img" onClick={togglePwd} />
          <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <div className="relative w-full">

          <Input type={isReveal2 ? "text" : "password"} placeholder="Password" name="cpassword" {...register("cPassword")}/>
          <img className=" absolute top-2.5  left-[90%]" src={isReveal2 ? visibilityOff : visibilityOn} alt="toggle-password-img" onClick={togglePwd2} />
          <p className="text-red-600">{errors.cPassword?.message}</p>
          </div>

          {/* <Link className="text-[#FBFBFB] text-[10px] font[400] underline">Forgot Password?</Link> */}
          <MyButton text="Sign Up" className="w-full h-[40px] font-[500] text-[20px] "  />
        </form>
        <p className="py-4">
          <span className="text-[15px] font-[400] text-[#FBFBFB] ">Already have an account?</span> <span
            className="text-[#B67B0F] font-[700] text-[16px] cursor-pointer ps-0.5"
            onClick={switchToSignIn}
          >
          Sign In
          </span>
        </p>
      </main>
    </>
  )
}

export default SignUp