import { ServicePerson } from "../models/Person.js";

// Add a new Service Person
export const addServicePerson = async (req, res) => {
  try {
    const {
      name,
      category,
      experience,
      age,
      pricePerHour,
      rating,
      reviewsCount,
      availability,
      description,
      photo,
    } = req.body;

    // Create a new document
    const newPerson = new ServicePerson({
      name,
      category,
      experience,
      age,
      pricePerHour,
      rating,
      reviewsCount,
      availability,
      description,
      photo,
    });

    await newPerson.save();

    res.status(201).json({
      success: true,
      message: "Service person added successfully!",
      data: newPerson,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to add service person.",
    });
  }
};


export const deleteServicePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await ServicePerson.findByIdAndDelete(id);

    if (!deletedPerson) {
      return res.status(404).json({ success: false, message: "Service person not found" });
    }

    res.status(200).json({ success: true, message: "Service person deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
