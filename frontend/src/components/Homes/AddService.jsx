import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    experience: "",
    age: "",
    pricePerHour: "",
    rating: "",
    reviewsCount: "",
    availability: "",
    description: "",
    photo: "",
  });

  const categories = [
    "cook",
    "driver",
    "plumber",
    "electrician",
    "maid",
    "home doctor",
    "home worker",
    "security guard",
    "private tutor",
    "gardener",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically add "/hr" to pricePerHour
    // if (name === 'pricePerHour') {
    //   setFormData({
    //     ...formData,
    //     [name]: value.includes('/hr') ? value : `${value}/hr`
    //   });
    // } else {
    setFormData({ ...formData, [name]: value });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/serviceperson/add", formData);
      alert("Service Person Added Successfully!");
      navigate("/"); // You can change route if needed
    } catch (error) {
      console.error(error);
      alert("Error adding service person.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <Link to={"/"}>
        <div className="py-2 px-4 bg-green-500 inline-block rounded-2xl ">
          Home
        </div>
      </Link>
      <h2 className="text-2xl inline-block w-full font-bold mb-6 text-center">
        Add New Service Person
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 5 years"
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Price Per Hour */}
        <div>
          <label className="block mb-1 font-medium">Price Per Hour</label>
          <input
            type="text"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            placeholder="e.g., 400"
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Reviews Count */}
        <div>
          <label className="block mb-1 font-medium">Reviews Count</label>
          <input
            type="number"
            name="reviewsCount"
            value={formData.reviewsCount}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block mb-1 font-medium">Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="e.g., Available Now"
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3c84e5] hover:bg-blue-600 text-white py-3 rounded-md font-semibold text-lg mt-6"
        >
          Add Service Person
        </button>
      </form>
    </div>
  );
};

export default AddService;
