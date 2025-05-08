import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./models/connectDB.js";
import dotenv from "dotenv";
import { router } from "./Routes/register.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5174","http://localhost:5174","https://student-records-nu.vercel.app/"],
    credentials: true,
  })
);
connectDB();
app.use(express.json());
app.use("/api", router);


app.listen(8800, () => {
  console.log("App running at port 9000");
});
