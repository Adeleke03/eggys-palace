import React from "react";
import MyButton from "../../components/MyButton";

const Hero = () => {
  return (
    
    <>
      <main className="relative  bg-[url(/hero-img-png.png)]  bg-cover bg-center  bg-no-repeat h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
      <div className=""></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#151517] to-transparent  flex  flex-col items-center justify-center h-full gap-y-5 lg:gap-y-20">
          <div className="animate__animated animate__fadeIn">

          <h1 className="text-[#F0F0F0] text-[2rem] pb-8 md:pb-0 md:text-[56px] font-[500] text-center ">
            The <span className="text-[#fda503] font-[400] font-Rammetto-one ">
               ZING 
            </span> in every bite
          </h1>
          <p className="text-[#FBFBFB] font-[400] md:font-[500] text-[28px] md:w-[48%] mx-auto text-center">
            Savor the flavor! Explore our delicious menu and order now for a
            taste sensation!
          </p>
          </div>
          <div className="flex justify-center flex-wrap gap-7 ">
            <MyButton text="Order Now!" className="w-[14rem] h-[56px] text-[#FFFFFF] text-[20px] "/>
            <MyButton text="View Menu" className=" w-[14rem]  lg:w-[9rem] h-[56px] bg-[#FBFBFB] font-[500] text-[16px] 
            text-black "/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
