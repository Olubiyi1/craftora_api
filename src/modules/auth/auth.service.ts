import { createLabel } from "../../utils/labels";
import AppError from "../../errorHandlers/appError";
import { IAuthService } from "./contracts/auth.contract";
import { RegisterDto } from "./dto/register.dto";
import userService, { SafeUser } from "../user/user.service";
import { Tokens } from "./auth.tokens.types";
import { LoginDto } from "./dto/login.dto";
import { ResetPasswordDto } from "./dto/resetPassword.dto";
// import UserService from "../user/user.service";
import Guards from "../../guards/guards";
import { generateToken, hashToken } from "../../helpers/token.helper";
import prisma from "../../config/prisma";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { User } from "../../generated/prisma/client";
import { TokenPayload } from "../../guards/guards";

const authServiceLog = createLabel("AUTH_SERVICE_LOG");
// creating a new instance if UserService
// const userService = new UserService();

class AuthService implements IAuthService {
  async register(data: RegisterDto): Promise<SafeUser> {
    // check if email exists
    const existingUser = await userService.findUserByEmail(data.email);

    if (existingUser) {
      authServiceLog.warn(`Email already exists: ${data.email}`);
      throw new AppError("Email already exists", 409);
    }

    const user = await userService.createUser(data);

    // goes with the email
    const verificationToken = generateToken();

    // saved to db
    const hashedToken = hashToken(verificationToken);

    await prisma.emailVerificationToken.create({
      data: {
        tokenHash: hashedToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 10000 * 60 * 60 * 24),
      },
    });

    // node mailer
    return user;
  }

  // login
  async login(data: LoginDto): Promise<{ user: SafeUser; tokens: Tokens }> {
    const existingUser = await userService.findUserByEmail(data.email);

    if (!existingUser) {
      authServiceLog.warn("Invalid email or password");
      throw new AppError(`Invalid email or password`, 400);
    }

    const passwordMatch = await Guards.comparePassword(
      data.password,
      existingUser.password,
    );

    if (!passwordMatch) {
      authServiceLog.warn("Invalid email or password");
      throw new AppError(`Invalid Email or Password`, 400);
    }

    // if (existingUser.isVerified === null) {
    //   authServiceLog.warn("Please verify your email");
    //   throw new AppError("Please verify your email", 400);
    // }

    const { password, ...safeuser } = existingUser;

    const payload = {
      id: safeuser.id,
      email: safeuser.email,
      role: safeuser.role,
    };
    const accessToken = Guards.createAccessToken(payload);
    const { refreshToken, hashedRefreshToken } =
      Guards.createRefreshToken(payload);

    // single refresh token approach
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const existingToken = await prisma.refreshToken.findUnique({
      where: { userId: safeuser.id },
    });

    if (existingToken) {
      await prisma.refreshToken.update({
        where: { userId: safeuser.id },
        data: {
          tokenHash: hashedRefreshToken,
          expiresAt,
        },
      });
    } else {
      await prisma.refreshToken.create({
        data: {
          tokenHash: hashedRefreshToken,
          userId: safeuser.id,
          expiresAt,
        },
      });
    }

    return {
      user: safeuser,
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  // forgotpassword

  async forgotPassword(email: string): Promise<void> {
    const existingUser = await userService.findUserByEmail(email);

    if (!existingUser) {
      authServiceLog.warn("Password reset requested for non-existing email");
      return;
    }

    const resetToken = generateToken();
    const hashedToken = hashToken(resetToken);

    // Delete any existing reset token for this user
    await prisma.passwordResetToken.deleteMany({
      where: {
        userId: existingUser.id,
      },
    });

    await prisma.passwordResetToken.create({
      data: {
        tokenHash: hashedToken,
        userId: existingUser.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 15),
      },
    });

    // nodemailer

    return;
  }

  // reset password

  async resetPassword(data: ResetPasswordDto): Promise<void> {
    const hashedToken = hashToken(data.token);
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { tokenHash: hashedToken },
    });
    if (!resetToken) {
      authServiceLog.warn("Invalid password reset token");
      throw new AppError("Invalid password reset token", 400);
    }

    if (resetToken.expiresAt < new Date()) {
      authServiceLog.warn("Password reset token has expired");

      throw new AppError("Password reset token has expired", 400);
    }

    const hashedPassword = Guards.hashPassword(data.newPassword);

    await prisma.user.update({
      where: {
        id: resetToken.userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.passwordResetToken.delete({
      where: {
        id: resetToken.id,
      },
    });
    authServiceLog.info(
      `Password reset successful for user ${resetToken.userId}`,
    );
    //
  }

  // change password
  async changePassword(userId: string, data: ChangePasswordDto): Promise<void> {
    const loggedInUser = await userService.findUserById(userId);

    if (!loggedInUser) {
      authServiceLog.warn("User not found");
      throw new AppError("User not found", 404);
    }

    const passwordMatch = await Guards.comparePassword(
      data.currentPassword,
      loggedInUser.password,
    );
    if (!passwordMatch) {
      authServiceLog.warn("Invalid password match");
      throw new AppError("Invalid password match", 400);
    }

    if (data.newPassword === data.currentPassword) {
      authServiceLog.warn(
        "New password cannot be the same as current password",
      );
      throw new AppError(
        "New password cannot be the same as current password",
        400,
      );
    }

    const hashPassword = Guards.hashPassword(data.newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashPassword },
    });
  }
}

export default new AuthService();
