import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../utils/userContex";

const Nav = () => {
  const { user, setUser } = useContext(userContext);
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef();
  const navigate = useNavigate();

  // Handle click outside to close the profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // if you are storing user in localStorage
    localStorage.removeItem("cartItems"); // if you are storing user in localStorage
    navigate("/login"); // redirect to login page (optional)
  };

  return (
    <div className="h-[70px] w-full bg-[#f0f4f7] px-6 md:px-10 text-gray-400 font-semibold text-[18px] flex items-center justify-between relative">
  {/* Left Side */}
  <div className="flex items-center gap-4 md:gap-8">
    <div className="font-bold text-[#417cf0] text-[22px] md:text-[27px]">Hello world</div>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-6 items-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/services"}>Services</Link>
      {user && user.admin && (
        <Link to={"/addservice"}>Add Service</Link>
      )}
    </div>
  </div>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button onClick={() => setOpenProfile(!openProfile)} className="text-gray-600 focus:outline-none">
      ☰
    </button>
  </div>

  {/* Right Side (Desktop Profile Button) */}
  <div className="hidden md:block relative">
    <div onClick={() => setOpenProfile(!openProfile)} className="cursor-pointer">
      Profile
    </div>

    {/* Profile Dropdown */}
    {openProfile && (
      <div
        ref={profileRef}
        className="absolute top-[70px] right-0 w-[300px] bg-white shadow-lg rounded-md p-4 z-10"
      >
        {user ? (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Hello, {user.name}
              </h3>
              <p className="text-gray-500 text-sm">{user.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500">Not logged in</div>
        )}
      </div>
    )}
  </div>

  {/* Mobile Menu Dropdown */}
  {openProfile && (
    <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg rounded-md p-4 z-10 md:hidden">
      <div className="flex flex-col gap-4">
        <Link to={"/"} onClick={() => setOpenProfile(false)}>Home</Link>
        <Link to={"/services"} onClick={() => setOpenProfile(false)}>Services</Link>
        {user && user.admin && (
          <Link to={"/addservice"} onClick={() => setOpenProfile(false)}>Add Service</Link>
        )}
        <div className="border-t pt-4">
          {user ? (
            <>
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Hello, {user.name}
                </h3>
                <p className="text-gray-500 text-sm">{user.username}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="text-center text-gray-500">Not logged in</div>
          )}
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Nav;
