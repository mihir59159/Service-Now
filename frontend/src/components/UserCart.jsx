import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ServiceCategoryCart from "./ServiceCategoryCart";
import { userContext } from "../utils/userContex";
import CartDetail from "./CartDetail";
import AddressForm from "./AddressForm";
import { toast } from "react-toastify";

const UserCart = () => {
  const { cartItems, setCartItem } = useContext(userContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const navigate = useNavigate();

  const PLATFORM_FEE = 50; // fixed ₹50
  const GST_PERCENTAGE = 18; // 18% GST

  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        const price = Number(item.pricePerHour.replace(/[^\d]/g, ""));
        return acc + price;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);

  const cartHandler = (detail) => {
    setCartItem(cartItems.filter((cart) => cart.id !== detail.id));
  };

  const gstAmount = (totalPrice + PLATFORM_FEE) * (GST_PERCENTAGE / 100);
  const finalAmount = totalPrice + PLATFORM_FEE + gstAmount;

  const addressSubmitHandler = (addressData) => {
    toast.success("Service person will arrive within 30 minutes!");
    setCartItem([]);
    localStorage.removeItem('cartItems');
    setTimeout(() => {
      navigate('/');
    }, 100);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-white shadow-md py-4 flex items-center justify-between px-10">
        <Link to="/services">
          <button className="bg-[#3c84e5] text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Back to Category
          </button>
        </Link>
        <h2 className="text-2xl font-bold text-gray-800">Hire Person</h2>
        <div></div>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 p-10">
            {cartItems.map((val) => (
              <CartDetail key={val.id} value={val} fun={cartHandler} />
            ))}
          </div>

          {/* Price Details */}
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8 mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Price Details</h3>
            <div className="flex justify-between mb-2">
              <span>Total Service Price</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Platform Fee</span>
              <span>₹{PLATFORM_FEE}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>GST (18%)</span>
              <span>₹{gstAmount.toFixed(0)}</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span>₹{finalAmount.toFixed(0)}</span>
            </div>

            {/* Payment Option */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Payment Method</h4>
              <div className="flex items-center gap-2">
                <input type="radio" checked disabled />
                <label>Cash On Delivery</label>
              </div>
            </div>

            {/* Hire Now Button */}
            {!showAddressForm && (
              <div className="mt-6">
                <button
                  className="w-full bg-[#3c84e5] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg text-lg"
                  onClick={() => setShowAddressForm(true)}
                >
                  Hire Now
                </button>
              </div>
            )}
          </div>

          {/* Address Form */}
          {showAddressForm && (
            <div className="max-w-2xl mx-auto">
              <AddressForm onSubmitAddress={addressSubmitHandler} />
            </div>
          )}
        </>
      ) : (
        <div className="w-full text-2xl mt-16 text-center">
          <h1>Currently Person Or Service is Unavailable</h1>
        </div>
      )}
    </>
  );
};

export default UserCart;
