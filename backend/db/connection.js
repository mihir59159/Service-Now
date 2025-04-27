import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ServiceNow",
    });

    console.log(`✅ MongoDB connected: ${connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection failed");
    console.log(error);
    process.exit(1); // Force server stop
  }
};
