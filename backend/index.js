import cookieParser from "cookie-parser";
import express from "express"
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors"








dotenv.config({});
const app = express();

const PORT = process.env.PORT ||3000;
app.get("/",(_,res)=>{
return res.status(200).json({
        messafe:"i m coming from a backend",
        success:true
    })
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
const corsOptions ={
    origin:'http://localhost:5174',
    credentials:true
}
app.use(cors(corsOptions));

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})


