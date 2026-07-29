import dotenv from "dotenv"
import { logger } from "./utils/logger";
dotenv.config()
import app from "./app";
// import redisConnection from "./config/redis";
import {configureCloudinary,cloudinary} from "./config/cloudinary";
import { seedUsers } from "./test.user";

configureCloudinary()

console.log("server starting...");
// seedUsers()
// redisConnection
app.listen(process.env.PORT,()=>{
    console.log("app up and running");
})
