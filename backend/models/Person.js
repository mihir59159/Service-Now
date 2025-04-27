// models/ServicePerson.js

import mongoose from "mongoose";

const servicePersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  pricePerHour: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewsCount: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  },
}, {
  timestamps: true
});

export const ServicePerson = mongoose.model("ServicePerson", servicePersonSchema);
