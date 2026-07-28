import express from "express"
import authRouter from "./modules/auth/auth.route";
import { globalErrorHandler } from "./errorHandlers/globaErrorHandler";

const app = express()

app.use(express.json());
app.use("/api/v1/auth",authRouter)

app.use(globalErrorHandler)

export default app;
