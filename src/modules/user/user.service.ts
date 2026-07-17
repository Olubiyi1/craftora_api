import prisma from "../../config/prisma";
import { createLabel } from "../../utils/labels";
import AppError from "../../errorHandlers/appError";
import Guards from "../../guards/guards";
import { Role } from "../../generated/prisma/enums";
import { CreateUserDto } from "./dto/createUser.dto";
import { IAuthService } from "../auth/contracts/auth.contract";
import { User } from "../../generated/prisma/client";
import { LoginDto } from "../auth/dto/login.dto";
import { IUserService } from "./contracts/user.contract";



//safe shape for anything going back to the client
// this would be returned in place of all the data that might include the password
export type SafeUser = Omit <User,"password">

const serviceLog = createLabel("SERVICE")

class UserService implements IUserService{
    async createUser(data: CreateUserDto): Promise<User> {
        
    }
    async findUserByEmail(email: string): Promise<User | null> {
        
    }
    async findUserById(id: string): Promise<User | null> {
        
    }
}
