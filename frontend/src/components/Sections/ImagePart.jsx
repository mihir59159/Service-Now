import React from "react";

const ImagePart = () => {
  return (
    <>
      <div className="h-auto min-h-[300px] w-full bg-[#111828] text-white flex flex-col gap-5 items-center justify-center px-4 py-10 text-center">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight">
          Find Trusted Professionals Instantly
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Connect with skilled professionals for all your home and personal
          service needs.
        </p>
        <button className="bg-[#3c84e5] font-semibold py-2 px-6 rounded-md cursor-pointer hover:bg-blue-500 text-sm md:text-base">
          Get Started
        </button>
      </div>
    </>
  );
};

export default ImagePart;
