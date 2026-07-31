import express from "express"
import authRouter from "./modules/auth/auth.route";
import { globalErrorHandler } from "./errorHandlers/globaErrorHandler";
import instructorRoute from "./modules/instructor/instructor.route";

const app = express()

app.use(express.json());
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/instructor-profile",instructorRoute)

app.use(globalErrorHandler)

export default app;
