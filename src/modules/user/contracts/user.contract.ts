import { CreateUserDto } from "../dto/createUser.dto";
import { User } from "../../../generated/prisma/browser";

export interface IUserService{
    createUser(data:CreateUserDto):Promise<User>

    findUserByEmail(email:string):Promise<User | null>
}