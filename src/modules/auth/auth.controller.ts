import { Request, Response } from "express";
import ResponseHandler from "../../utils/responseHandler";
import { createLabel } from "../../utils/labels";
import authService from "./auth.service";
import { asyncHandler } from "../../errorHandlers/asyncHanlder";
import { AuthRequest } from "../../types/express";

const authController = createLabel("AUTH_CONTROLLER");

class AuthController {
  registerUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    authController.info("User registration successful");
    return ResponseHandler.created(res, "User registratiion successful", user);
  });

  loginUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.login(req.body);
    authController.info("Login Successful");
    return ResponseHandler.success(res, "Login Successful", user);
  });

  forgotPassword = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.forgotPassword(req.body.email);
    authController.info(
      "If an account with that email exists, a password reset email has been sent.",
    );
    return ResponseHandler.success(
      res,
      "If an account with that email exists, a password reset email has been sent.",
      result,
    );
  });

  changePassword = asyncHandler(async (req: AuthRequest, res: Response) => {

    // req.user!.id the non-null assertion operator in TypeScript.
    const userId = req.user!.id;
    await authService.changePassword(userId, req.body);
    return ResponseHandler.success(res,"Password changed successfully",null)
  });
}

export default new AuthController();
