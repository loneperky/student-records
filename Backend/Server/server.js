import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { router } from '../Routes/auth.js'

dotenv.config()

const app = express()

app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true,
}))

app.use(cookieParser())
app.use(express.json())
app.use("/new",router)

//mongodb://localhost:27017

//

mongoose.connect("mongodb://localhost:27017/students_records")

app.listen(9000,()=>{
  console.log("App running at port 9000")
})

