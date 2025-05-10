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
  
  try {
    const student = await StudentDB.findOne({ matno });

    if (student) {
      return res.json(student); // Return student data if found
    } else {
      return res.status(404).json({ message: "No record found for this Mat No." }); // Return a 404 error with a message
    }
  } catch (error) {
    console.error("Error fetching student:", error);
    return res.status(500).json({ message: "Error fetching student record." }); // Return a 500 error if there is an issue
  }
});


export { router };
