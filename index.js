import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import patientRoute from './Routes/patientRoute.js';



const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


const PORT = 8801;

app.use('/api/patients', patientRoute);
// app.use("/api/auth",authRoute);
// app.use("/api/user",userRoute);
// app.use("/api/books",bookRoute);
// app.use("/api/cart",cartRoute);





app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(statusCode).json({
      success: [200, 201, 204].some(a => a === err.status) ? true : false,
      status: statusCode,
      message: message,
      data: err.data,
      stack: err.stack
    });
  });
  




const connectMongoDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/PatientDB");     
        console.log("connected to database")
    }catch(error){
      throw error;
    }
}


app.listen(PORT, () => {
    connectMongoDB();
console.log(`Running express server on Port ${PORT}`)});