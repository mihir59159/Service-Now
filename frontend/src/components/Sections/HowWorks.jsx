import React from "react";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import { LuSlidersVertical } from "react-icons/lu";

const HowWorks = () => {
  const steps = [
    {
      icon: PiCheckSquareOffsetBold,
      title: "Select a Service",
      description: "Choose from various professionals",
    },
    {
      icon: LuSlidersVertical,
      title: "Customize Your Request",
      description: "Set preferences (time,location,etc.)",
    },
    {
      icon: HiPhoneArrowUpRight,
      title: "Confirm & Connect",
      description: "Instantly book and contact the provider",
    },
  ];
  
  return (
    <>
      <div className="p-5">
        <h1 className="font-bold text-3xl w-full text-center py-10">
          How It Works
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((value, index) => (
            <div key={index} className="flex w-[400px] flex-col gap-2 justify-center items-center">
              <div className="bg-blue-200 inline-block rounded-full text-4xl p-3 text-blue-600">
                <value.icon />
              </div>
              <p className="font-semibold text-[20px]">{value.title}</p>
              <p className="text-gray-700 font-semibold">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowWorks;
