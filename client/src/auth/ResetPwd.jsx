import { React, useState } from "react";
import visibilityOn from "../assets/visibility_on.svg";
import visibilityOff from "../assets/visibility_off.svg";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import MyButton from "../components/MyButton";
import brandLogo from "../assets/nav-logo.svg"
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetpwdSchema } from "../utils/ValidationSchema";

const ResetPwd = () => {
  const [isReveal, setIsReveal] = useState(false);
  const [isReveal2, setIsReveal2] = useState(false);
  function togglePwd() {
    setIsReveal((prev) => !prev);
  }
  function togglePwd2() {
    setIsReveal2((prev) => !prev);
  }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(ResetpwdSchema),
      })
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <main className="bg-[#2F2F2F] h-screen flex flex-col   md:text-start justify-center items-center">
        <section className="">
          <div className="flex justify-center mb-6">
            <img src={brandLogo} alt="brand-logo" className="w-[49px]" />
          </div>
          <div className="">
            <h1 className="text-[#FBFBFB] text-[32px] font-[500] ">
              Reset password
            </h1>
            <p className="font-[400] text-[20px] text-[#FBFBFB]">
              Enter your new password
            </p>
          </div>
        </section>

        <form
          className="flex flex-col gap-y-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full">
            <Input
              type={isReveal ? "text" : "password"}
              placeholder="Password"
              name="password"
              {...register("password")}
            />
            <img
              className=" absolute top-2.5  left-[90%]"
              src={isReveal ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={togglePwd}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <div className="relative w-full">
            <Input
              type={isReveal2 ? "text" : "password"}
              placeholder="confirm Password"
              name="cpassword"
              {...register("cPassword")}
            />
            <img
              className=" absolute top-2.5  left-[90%]"
              src={isReveal2 ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={togglePwd2}
            />
            <p className="text-red-600">{errors.cPassword?.message}</p>
          </div>
          <MyButton
            text="Reset password"
            className="w-[350px] font-[500] text-[20px] md:w-[400px] h-[56px]"
          />
        </form>
      </main>
    </>
  );
};

export default ResetPwd;