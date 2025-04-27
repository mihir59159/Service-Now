import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import ServiceCategoryCart from "./ServiceCategoryCart";
import { userContext } from "../utils/userContex";

const ServiceCategory = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const { cartItems, setCartItem } = useContext(userContext);
  const { user } = useContext(userContext);

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/services/${category}`)
      .then((res) => {
        const availbledata = res.data.persons.filter(
          (service) => !cartItems.some((cartItem) => cartItem.id === service.id)
        );
        // const data = res.data.persons.filter(val => val.id)
        console.log(availbledata);
        // setData(res.data.persons);
        setData(availbledata);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const cartHandler = (detail) => {
    setCartItem([...cartItems, detail]);
  };

  const deleteHandler = async (detail) => {
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${detail.name}?`
      );
      if (!confirmDelete) return;

      await axios.delete(
        `http://localhost:5000/api/serviceperson/delete/${detail._id}`
      );

      alert("Service deleted successfully!");

      getData(); // Refresh data after deleting
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Error deleting service!");
    }
  };

  useEffect(() => {
    getData();
  }, [cartItems]);

  return (
    <>
      {/* Small Navbar */}
      <div className="bg-white shadow-md py-4 flex items-center justify-between px-10">
        <Link to="/services">
          <button className="bg-[#3c84e5] text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Back to Category
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-gray-700">
          {category.toUpperCase()}'S
        </h2>
        <div>
          <Link to={"/user/cart"}>
            <PiShoppingCartDuotone className="text-3xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 p-10">
          {data.map((val) => (
            <ServiceCategoryCart
              user={user}
              value={val}
              fun={cartHandler}
              fun1={deleteHandler}
            />
          ))}
        </div>
      ) : (
        <div className="w-full text-2xl mt-16 text-center">
          <h1>Currently Person Or Service is Unavilable</h1>
        </div>
      )}
    </>
  );
};

export default ServiceCategory;
