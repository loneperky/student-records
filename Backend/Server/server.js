import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "../Routes/auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5175"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", router);

//mongodb://localhost:27017

//

mongoose.connect("mongodb://localhost:27017/students_records");

app.listen(8800, () => {
  console.log("App running at port 9000");
});
