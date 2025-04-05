import express from "express";
import jwt from "jsonwebtoken";
import { StudentDB } from "../models/UserDB.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { fullname, matno, faculty, dept, level, gender, age } = req.body;

  if (!fullname || !matno || !faculty || !dept || !level || !gender || !age) {
   return res.json({ status: false, message: "Please input all details" });
  }

  const CheckStudent = await StudentDB.findOne({ matno });
  if (CheckStudent) {
   return res.json({ success: false, message: "This student already registered" });
  }

  const newStudent = new StudentDB({
    fullname,
    matno,
    faculty,
    dept,
    level,
    gender,
    age,
  });
  await newStudent.save();
  console.log(newStudent);
  return res.json({
    status: true,
    message: "Student details registered successfully",
  });
});

export { router };
