import React from "react";
import navLogo from "../assets/nav-logo.svg"
import xLogo from "../assets/x-img.svg";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";
import youtubeLogo from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#100101] h-full py-10 flex  flex-col gap-8">
      <section className="wrapper text-center  justify-center pb-8  lg:flex items-center lg:justify-between">
        <div className="flex justify-center items-center bg-[#B67B0F] p-2 rounded-[6px] w-20 mx-auto md:mx-0 md:w-fit mb-6 md:mb-0 ">
          <img src={navLogo} alt="nav-logo" />
        </div>
        <div className="md:py-6">
          <ul className="lg:flex gap-6 text-[20px] font-[40] text-[#FBFBFB]">
            <li>About</li>
            <li>Products</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="hidden md:inline-flex gap-x-5 ">
          <img src={xLogo} alt="x-logo" className="w-8" />
          <img src={facebookLogo} alt="facebook-logo" className="w-8" />
          <img src={twitterLogo} alt="twitter-logo" className="w-8" />
          <img src={instagramLogo} alt="instagram-logo"  className="w-8"/>
          <img src={youtubeLogo} alt="youtube-logo" className="w-8" />
        </div>
      </section>
      <section className="wrapper text-[14px]  font-[400]  text-[#FBFBFB] ">
        <div className="border-t-2  pt-8 lg:flex  text-center justify-between ">

        <p className="pb-4">TM & Copyright 2025 Jazzy Corporation. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
