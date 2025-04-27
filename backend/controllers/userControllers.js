import { ServicePerson } from "../models/Person.js";
import { User } from "../models/user.js";
// import { servicePersons } from "../utils/servicePersonsData.js";
// import { servicePersons } from "../utils/servicePersonsData.js";
import { servicesData } from "../utils/servicesData.js";


export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Both fields are required" });
    }

    // Check user exist
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Match password (no hashing for now, simple match)
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    // Success Login
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        name: user.name,
        admin:user.admin,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong in login" });
  }
}


export const registerController = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(409).json({ success: false, message: "Username already taken" });
    }

    // Save user
    const user = await User.create({ name, username, password });

    res.status(201).json({
      success: true,
      message: "Registration successful, Please Login Now",
      user: {
        _id: user._id,
        username: user.username,
        name: user.name,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong in registration" });
  }
};


export const getServices = (req, res) => {
  res.status(200).json({
    success: true,
    services: servicesData,
  });
};

export const getServiceCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log("Requested category:", category);

    console.log(category)
    const servicePersons = await ServicePerson.find({ category: category.toLowerCase() });
    console.log(servicePersons)
    if (!servicePersons || servicePersons.length === 0) {
      console.log("No persons found for category:", category);
      return res.status(400).json({
        success: false,
        message: "No service persons found for this category.",
        persons: []
      });
    }

    res.status(200).json({
      success: true,
      serviceCategory: category,
      persons: servicePersons
    });

  } catch (error) {
    console.error("Error fetching service persons:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};