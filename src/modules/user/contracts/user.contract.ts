import { CreateUserDto } from "../dto/createUser.dto";
import { UpdateUseDto } from "../dto/updateUser.Dto";
import { User } from "../../../generated/prisma/client";
import { SafeUser } from "../user.service";
export interface IUserService{
    createUser(data:CreateUserDto):Promise<SafeUser>
    findUserByEmail(email:string):Promise<User | null>
    findUserById(id:string):Promise<User | null>
    updateuser(id:string,data:UpdateUseDto):Promise<SafeUser | null>
}