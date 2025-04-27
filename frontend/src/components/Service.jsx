import React, { useEffect, useState } from 'react';
import Nav from './Homes/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServiceCard from './Sections/ServiceCard';
import { PiShoppingCartDuotone } from "react-icons/pi";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/services");
        if (data.success) {
          setServices(data.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Nav />
      
      {/* Small Navbar */}
      <div className="bg-white shadow-md py-4 flex items-center justify-between px-10">
        <Link to="/">
          <button className="bg-[#3c84e5] text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Back to Home
          </button>
        </Link>
        <h2 className="text-2xl font-bold text-gray-800">Services</h2>
        <div><Link to={'/user/cart'}><PiShoppingCartDuotone className='text-3xl cursor-pointer'/></Link></div>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-10">
        {services.map((service) => (
           <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Service;
