import { Response, NextFunction } from "express";
import AppError from "../errorHandlers/appError";
import prisma from "../config/prisma";
import { createLabel } from "../utils/labels";
import { AuthRequest } from "../types/express";

const authLog = createLabel("AUTH");

export const verifyLoggedInUser = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  try {
    if (!req.user) {
      next(new AppError("Authntication required", 401));
      return;
    }
    next();
  } catch (err) {
    next(new AppError("Something went wrong", 500));
  }
};

export const verifyUserByEmail = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { email } = req.body;
    if (!email) {
      next(new AppError("User not found", 404));
    }

    const user = await prisma.user.findUnique({where:{email}})
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      emailVerifiedAt: user.emailVerifiedAt ?? undefined,
    };
    authLog.info("User verified by email", { email });
    next();
  } catch (err) {
    next(new AppError("Something went wrong", 500));
  }
};
