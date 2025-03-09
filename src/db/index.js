import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      "MONGODB connected DB-HOST:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
  }
};

export default connectDB;
