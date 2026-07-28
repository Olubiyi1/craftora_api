import prisma from "../../config/prisma";
import { createLabel } from "../../utils/labels";
import AppError from "../../errorHandlers/appError";
import Guards from "../../guards/guards";
import { Role } from "../../generated/prisma/enums";
import { CreateUserDto } from "./dto/createUser.dto";
import { User } from "../../generated/prisma/client";
import { IUserService } from "./contracts/user.contract";
import { UpdateUseDto } from "./dto/updateUser.Dto";

//safeuser shape for anything going back to the client
// this would be returned in place of all the data that might include the password
export type SafeUser = Omit<User, "password">;

const serviceLog = createLabel("SERVICE");

class UserService implements IUserService {
  async createUser(data: CreateUserDto): Promise<SafeUser> {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      serviceLog.warn(`User with email ${data.email} exists`);
      throw new AppError("Email already exists", 409);
    }

    const hashedPassword = Guards.hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    const { password, ...safeUser } = user;
    serviceLog.info(`user successfully registered`);
    return safeUser;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async updateuser(id: string, data: UpdateUseDto): Promise<SafeUser | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      serviceLog.warn(`user with id :${id} does not exist`);
      return null;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
    const { password, ...safeUser } = updatedUser;

    serviceLog.info(`user with id: ${id} updated successfully`);
    return safeUser;
  }
}

export default UserService;
