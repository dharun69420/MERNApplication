import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/userRoute.js";
const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
app.use("/api", router);

mongoose.connect(MONGO_URL).then(() => {
  console.log("Database connected to", MONGO_URL);
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
