import React from "react";
import { LuChefHat } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { IoShieldOutline } from "react-icons/io5";
import { SlWrench } from "react-icons/sl";
import { GoZap } from "react-icons/go";
import {Link} from 'react-router-dom'

const ServiceShow = () => {
  const services = [
    {
      icon: LuChefHat,
      title: "Cooks",
      categoty:"cook",
      decription: " professional chefs for your events",
    },
    {
      icon: IoCarSportOutline,
      title: "Drivers",
      categoty:"driver",
      decription: " Experienced drivers at your service",
    },
    {
      icon: IoShieldOutline,
      title: "Security Guards",
      categoty:"security guard",
      decription: " Reliable security personnel",
    },
    {
      icon: SlWrench,
      title: "Plumbers",
      categoty:"plumber",
      decription: " Expert plumbers for any job",
    },
    {
      icon: GoZap,
      title: "Elecricians",
      categoty:"electrician",
      decription: "Skilled electricians for your needs",
    },
  ];
  return (
    <>
      <div className="w-full pb-16 p-10 bg-[#f0f4f7]">
        <h1 className="font-bold text-black text-[22px] w-full text-center mb-8 ">
          Our Services
        </h1>
        <div className="w-full md:w-[95%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {services.map((val, i) => (
            <div className="w-full bg-white p-7 rounded-[5px] ">
              <val.icon className="text-[#3c84e5] text-5xl " />
              <p className="font-semibold text-[20px] py-1.5">{val.title}</p>
              <p className="text-gray-500 pb-2">{val.decription}</p>
              <Link to={`/services/${val.categoty}`}>
                <button className="bg-[#3c84e5] text-white font-[500] py-2 px-3 text-[14px] rounded-[5px] cursor-pointer hover:bg-blue-500 ">
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceShow;
