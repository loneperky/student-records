import express from "express";
import nodemailer from "nodemailer";
import { StudentDB } from "../models/UserDB.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { fullname, matno, faculty, dept, level, gender, age, skills } =
    req.body;
  try {
    const newStudent = new StudentDB({
      fullname,
      matno,
      faculty,
      dept,
      level,
      gender,
      age,
      skills,
    });
    await newStudent.save();
    console.log(newStudent);
    return res.json({
      status: true,
      message: "Student details registered successfully",
      newStudent,
    });
  } catch (error) {
    console.log(error, "There was an error");
  }
});

router.get("/all", async (req, res) => {
  const students = await StudentDB.find();
  res.json(students);
});

router.post("/student", async (req, res) => {
  const { matno } = req.body;
  const student = await StudentDB.findOne({ matno });
  if (student) {
    return res.json(student);
  } else {
    return res.json(student);
  }
});

export { router };
