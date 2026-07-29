import authController from "./auth.controller";
import { Router } from "express";
import {validateBody} from "../../middlewares/validationMiddlewares";
import { registerUserValidationSchema,loginValidationSchema,forgotPasswordSchema, changePasswordValidationSchema,resetPasswordValidationSchema} from "./auth.validation";

const authRouter = Router()

authRouter.post("/register",validateBody(registerUserValidationSchema),authController.registerUser)
authRouter.post("/login",validateBody(loginValidationSchema),authController.loginUser)
authRouter.post("/forgot-password",validateBody(forgotPasswordSchema),authController.forgotPassword)
authRouter.post("/change-password",validateBody(changePasswordValidationSchema),authController.changePassword)
authRouter.patch("/reset-password",validateBody(resetPasswordValidationSchema),authController.resetPassword)

export default authRouter;