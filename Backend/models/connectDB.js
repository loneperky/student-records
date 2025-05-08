import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
  