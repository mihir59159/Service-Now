import React, { useState } from "react";

const AddressForm = ({ onSubmitAddress }) => {
  const [addressData, setAddressData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitAddress(addressData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-md mt-8">
      <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={addressData.fullName}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={addressData.mobile}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={addressData.address}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={addressData.city}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={addressData.pincode}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <button type="submit" className="bg-[#3c84e5] text-white py-3 px-6 rounded hover:bg-blue-600 w-full">
        Confirm Address
      </button>
    </form>
  );
};

export default AddressForm;
