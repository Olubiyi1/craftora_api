import dotenv from "dotenv"
dotenv.config()
import app from "./app";
// import redisConnection from "./config/redis";
import {configureCloudinary,cloudinary} from "./config/cloudinary";
configureCloudinary()

const port = 3000
console.log("server starting...");

// redisConnection
app.listen(port,()=>{
    console.log("app up and running");
})
