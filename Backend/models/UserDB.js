import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      
    },
    matno: {
      type: String,
      
      unique: true,
    },
    faculty: {
      type: String,
      
    },
    dept: {
      type: String,
    },
    level: {
      type: String,
      
    },
    gender: {
      type: String,
      
    },
    age: {
      type: Date,
      
    },
    // area: {
    //   type: Array,
    // },
  },
  { timstamps: true }
);

const StudentDB = mongoose.model("StudentDB", UserSchema);
export { StudentDB };
