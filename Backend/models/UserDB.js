import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    matno: {
      type: String,
      required: true,
      unique: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    dept: {  
      type: String,
    },
    level: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Date,
      required: true,
    },
    skills: {
      type: [String]
    },
  },
  { timstamps: true}
);

const StudentDB = mongoose.model("StudentDB", UserSchema);
export { StudentDB };
