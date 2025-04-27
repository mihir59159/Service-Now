import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPassVisible((prev) => !prev);
  };

  const detailsHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: data.name,
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration success:", res.data);

      // After registration, redirect to login page
      navigate("/");
    } catch (error) {
      console.log(
        "Registration Error:",
        error.response?.data?.message || error.message
      );
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#f0f4f7] w-screen h-screen selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <div className="bg-[#111828] w-[500px] mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-5 py-10 rounded-2xl">
        <h1 className="font-bold text-[50px] text-[#2e84ff] mt-3">
          Registration
        </h1>
        <p className="text-gray-300 text-[14px] ml-1 mt-3">
          {/* Enter your Detail : */}
        </p>
        <hr className="mb-5 text-gray-500" />
        <form onSubmit={sendData} method="POST">
          <input
            type="text"
            name="name"
            onChange={detailsHandler}
            value={data.name}
            required
            className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[18px]  text-blue-100 "
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={detailsHandler}
            value={data.username}
            required
            className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[18px]  text-blue-100 "
          />
          <div className="relative">
            <input
              type={passVisible?"text":"password"}
              name="password"
              id="pas"
              onChange={detailsHandler}
              value={data.password}
              minLength={8}
              placeholder="Enter Password"
              required
              className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[18px]  text-blue-100 "
            />
            {passVisible ? (
              <IoEyeOutline
                onClick={() => togglePassword()}
                className="absolute top-[12px] cursor-pointer text-2xl right-[20px]"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => togglePassword()}
                className="absolute top-[12px] cursor-pointer text-2xl right-[20px]"
              />
            )}
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={detailsHandler}
            value={data.confirmPassword}
            required
            minLength={8}
            className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[18px]  text-blue-100 "
          />
          <button className="bg-[#2e84ff] text-[#111828] py-2 px-4 text-[20px] font-semibold rounded-4xl mt-3 w-full cursor-pointer hover:bg-blue-400 hover:text-gray-900">
            Registration
          </button>
        </form>
        <div className="flex justify-center items-center my-3 ">
          <span className="inline-block w-full border-1 border-gray-300" />{" "}
          <span className="px-2">or</span>{" "}
          <span className="inline-block w-full border-gray-300 border-1" />
        </div>
        <Link to="/">
          <button className="bg-[#2e84ff] text-[#111828] py-2 px-4 text-[20px] font-semibold rounded-4xl mt-3 w-full cursor-pointer hover:bg-blue-400 hover:text-gray-900">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
