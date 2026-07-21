import { Request, Response } from "express";
import AppError from "../../errorHandlers/appError";
import ResponseHandler from "../../utils/responseHandler";
import AuthService from "./auth.service";
import { createLabel } from "../../utils/labels";
import { asyncHandler } from "../../errorHandlers/asyncHanlder";
import authService from "./auth.service";

const authController = createLabel("AUTH_CONTROLLER");

class AuthController {
  registerUser = asyncHandler(
    async (req: Request, res: Response) => {
      const user = await authService.register(req.body);
      authController.info(`User successfully registered`)
      return ResponseHandler.created(res, "User successfully created", user);
    },
  );
}

export default new AuthController
