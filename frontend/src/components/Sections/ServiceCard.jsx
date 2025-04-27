import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-5 hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="w-full md:w-40 flex justify-center">
        <img
          src={service.image}
          alt={service.name}
          className="w-24 h-24 md:w-35 md:h-45 object-cover rounded-full border-2 border-gray-900 p-1"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold mb-1">{service.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{service.description}</p>

        {/* Only show below details in md and above */}
        <div className="hidden md:block">
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Price:</span> {service.priceRange}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Rating:</span> {service.rating} ⭐ (
            {service.reviewsCount} reviews)
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Availability:</span>{" "}
            {service.availability}
          </p>
        </div>

        <Link to={`/services/${service.name.toLowerCase()}`}>
          <button className="mt-3 bg-[#3c84e5] text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
