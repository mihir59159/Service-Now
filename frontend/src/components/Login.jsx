import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../utils/userContex";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const detailsHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch((error) => {
        console.log(
          "Login Error:",
          error.response?.data?.message || error.message
        );
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="bg-[#f0f4f7] w-screen h-screen selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
      <div className="bg-[#111828] w-[500px] mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-5 py-10 rounded-2xl">
        <h1 className="font-bold text-[50px] text-[#2e84ff] mt-3">Login</h1>
        <p className="text-gray-300 text-[12px] ml-1 mt-3"></p>
        <hr className="mb-5 text-gray-500" />
        <form onSubmit={(e)=>sendData(e)} method="POST">
          <input
            type="text"
            name="username"
            onChange={detailsHandler}
            placeholder="Enter Username"
            value={data.username}
            required
            className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[20px]  text-blue-100 "
          />
          <input
            type="password"
            name="password"
            onChange={detailsHandler}
            placeholder="Enter Password"
            value={data.password}
            minLength={8}
            required
            className="block w-full border-gray-500 border-1 px-5 py-2 rounded-2xl outline-none active:border-amber-900 my-5 text-[20px]  text-blue-100 "
          />
          <p className="float-right text-blue-700 hover:text-blue-500 cursor-pointer my-1">
            forgot password ?
          </p>

          <input
            type="submit"
            className="bg-[#2e84ff] text-[#111828] py-2 px-4 text-[20px] font-semibold rounded-4xl mt-3 w-full cursor-pointer hover:bg-blue-400 hover:text-gray-900"
            placeholder="Submit"
          />
        </form>
        <div className="flex justify-center items-center my-3 ">
          <span className="inline-block w-full border-1 border-gray-300" />{" "}
          <span className="px-2">or</span>{" "}
          <span className="inline-block w-full border-gray-300 border-1" />
        </div>
        <Link to={"/registraion"}>
          <button className="bg-[#2e84ff] text-[#111828] py-2 px-4 text-[20px] font-semibold rounded-4xl mt-3 w-full cursor-pointer hover:bg-blue-400 hover:text-gray-900">
            Registaion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
