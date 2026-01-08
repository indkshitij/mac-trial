import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productModel from "./models/product.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Root Route (Health Check)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 API is running successfully",

    timestamp: new Date().toISOString(),
    apiVersion: "v1",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
