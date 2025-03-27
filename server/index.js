import express from "express";
import { connect } from "./config/db.js";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";



const app = express();
app.use(cors())

const port = process.env.PORT || 4040;
dotenv.config()
// http://localhost:4040/api/product/create

app.use(express.json());
// api routes
app.use("/api/product", productRoute);
app.use("/api/auth", authRoute);




app.get("/",(req,res)=>{
    res.status(200).json({success:true, message:"server is live"})
})


app.use((req,res)=>{
    res.status(404).json({success:false,errMsg:"route not found"})
})

connect()
.then( ( )=>{
    try {
        app.listen(port,()=>{
            console.log(`http://localhost:${port}`);
        })
    } catch (error) {
        console.log("can not connect to server" + error.message);
    }
})
.catch((error)=>{
    console.log("invalid database connection" + error.message);
    
})

