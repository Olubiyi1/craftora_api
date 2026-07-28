import { Request, Response } from "express";
import ResponseHandler from "../../utils/responseHandler";
import { createLabel } from "../../utils/labels";
import authService from "./auth.service";
import { asyncHandler } from "../../errorHandlers/asyncHanlder";
import { AuthRequest } from "../../types/express";

// const authController = createLabel("AUTH_CONTROLLER");

class AuthController {
  registerUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    return ResponseHandler.created(res, "User registratiion successful", user);
  });

  loginUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.login(req.body);
    return ResponseHandler.success(res, "Login Successful", user);
  });

  forgotPassword = asyncHandler(async (req: Request, res: Response) => {
    await authService.forgotPassword(req.body.email);
    return ResponseHandler.success(
      res,
      "If an account with that email exists, a password reset email has been sent.",
      null,
    );
  });

  resetPassword = asyncHandler(async (req, res) => {
    await authService.resetPassword(req.body);
    return ResponseHandler.success(res, "Password reset successful", null);
  });

  changePassword = asyncHandler(async (req: AuthRequest, res: Response) => {
    // req.user!.id the non-null assertion operator in TypeScript.
    const userId = req.user!.id;
    await authService.changePassword(userId, req.body);
    return ResponseHandler.success(res, "Password changed successfully", null);
  });
}

export default new AuthController();
