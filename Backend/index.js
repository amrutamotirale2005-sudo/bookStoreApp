import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const URL = process.env.mongoDBURl;

// ✅ MIDDLEWARES (VERY IMPORTANT ORDER)
app.use(cors());
app.use(express.json()); // <-- MUST be before routes
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

// ✅ ROUTES
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

// server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
