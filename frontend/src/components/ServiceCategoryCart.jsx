import React from "react";
import { Link } from "react-router-dom";

const ServiceCategoryCart = ({ value, fun, user ,fun1}) => {
  // console.log("hello");
  return (
    <div
      key={value.id}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-5 hover:shadow-lg transition-all duration-300"
    >
      {/* Image Section */}
      <div className="w-full md:w-40 flex justify-center">
        <img
          src={value.photo}
          alt={value.name}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-900 p-1"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold mb-1">{value.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{value.description}</p>

        {/* Details (always visible now) */}
        <div>
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Experience:</span>{" "}
            {value.experience}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Price:</span> {value.pricePerHour}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Rating:</span> {value.rating} ⭐ (
            {value.reviewsCount} reviews)
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Availability:</span>{" "}
            {value.availability}
          </p>
        </div>

        <button
          onClick={() => fun(value)}
          className="mt-3 bg-[#3c84e5] text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer disabled:blur-md"
        >
          Request Service
        </button>
        {user && user.admin && (
          <button
            onClick={() => fun1(value)}
            className="mt-3 bg-[#e53c3f] ml-3 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer disabled:blur-md"
          >
            Delete Service
          </button>
        )}
        {/* <a href={`/services/${value.category}`}> */}
        {/* </a> */}
      </div>
    </div>
  );
};

export default ServiceCategoryCart;
