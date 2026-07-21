import authController from "./auth.controller";
import { Router } from "express";
import validate from "../../middlewares/validationMiddleware";
import { registerUserValidationSchema } from "./auth.validation";


const router = Router()

router.post("/",validate(registerUserValidationSchema),authController.registerUser)