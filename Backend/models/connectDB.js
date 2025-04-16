import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    })

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

connectDB()
mongoose.connection.on("connected",()=>{ 
  console.log("MongoDB connected successfully")
})
// mongoose.connection.on("error",(error)=>{  

  