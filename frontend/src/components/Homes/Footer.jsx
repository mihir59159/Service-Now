import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#111828] w-full text-white py-5 px-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-7 justify-center">
        <div className="">
          <h1 className="font-semibold text-[20px] py-2">Quick Links</h1>
          <div className="flex flex-col gap-1">
            <a href="#" target="_blank">
              About Us
            </a>
            <a href="#" target="_blank">
              Contact
            </a>
            <a href="#" target="_blank">
              Terms & Conditions
            </a>
            <a href="#" target="_blank">
              Privecy Policy
            </a>
          </div>
        </div>

        <div className="">
          <h1 className="font-semibold text-[20px] py-2">Connect with Us</h1>
          <div className="flex gap-4 text-2xl">
            <a href="#" target="_blank">
            <FiFacebook />
            </a>
            <a href="#" target="_blank">
            <TbBrandTwitter />
            </a>
            <a href="#" target="_blank">
            <FaInstagram />
            </a>
            <a href="#" target="_blank">
            <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="w-full">
          <h1 className="font-semibold text-[20px] py-2">Give Feedback</h1>
          <div className="">
            <input type="search" placeholder="Enter Your Feedback" className="w-[150px] outline-none border-1 border-gray-500 py-2 px-3 text-[12px] rounded-l-[7px]"/>
            <button className="inline-block bg-[#2b7fff] py-2 px-3 text-[12px] border border-gray-500 rounded-r-[7px] cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
      <h4 className="text-gray-600 text-center leading-4 flex items-ceneter justify-center"><AiTwotoneCopyrightCircle className="inline-block" />2023 Service Booking App. All rights reserved.</h4>
    </div>
  );
};

export default Footer;
