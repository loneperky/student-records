import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { connectDB } from '../models/connectDB.js'
import dotenv from 'dotenv'
dotenv.config()

import { router } from '../Routes/auth.js'
const app = express()

app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true,
}))

app.use(cookieParser())
app.use(express.json())
app.use("/new",router)


//

mongoose.connect("mongodb://127.0.0.1:27017/students-records")

app.listen(9000,()=>{
  console.log("App running at port 9000")
})

