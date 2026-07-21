import { createLabel } from "../../utils/labels";
import { User } from "../../generated/prisma/client";
import AppError from "../../errorHandlers/appError";
import { IAuthService } from "./contracts/auth.contract";
import { RegisterDto } from "./dto/register.dto";
import prisma from "../../config/prisma";
import { SafeUser } from "../user/user.service";
import { Tokens } from "./auth.tokens.types";
import { LoginDto } from "./dto/login.dto";
import { ResetPasswordDto } from "./dto/resetPassword.dto";
import UserService from "../user/user.service";

const authServiceLog = createLabel("AUTH_SERVICE_LOG");
// creating a new instance if UserService
const userService = new UserService();

class AuthService implements IAuthService {
  async register(data: RegisterDto): Promise<SafeUser> {
    // check if email exists
    const existingUser = await userService.findUserByEmail(data.email);

    if (existingUser) {
      authServiceLog.warn(`Email already exists: ${data.email}`);
      throw new AppError("Email already exists", 409);
    }
    const user = await userService.createUser(data)

    return user;
  }

  async login(data: LoginDto): Promise<{ user: SafeUser; tokens: Tokens }> {
  }
  async forgotPassword(email: string): Promise<void> {}
  async resetPassword(data: ResetPasswordDto): Promise<void> {}
}

export default new AuthService;