import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Error in connecting database");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
