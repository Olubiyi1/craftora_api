import authController from "./auth.controller";
import { Router } from "express";
import {validateBody,validateId} from "../../middlewares/validationMiddlewares";
import { registerUserValidationSchema,loginValidationSchema} from "./auth.validation";



const authRouter = Router()

authRouter.post("/register",validateBody(registerUserValidationSchema),authController.registerUser)
authRouter.post("/login",validateBody(loginValidationSchema),authController.loginUser)
authRouter.post("/forgot-password",validateId(),authController.forgotPassword)