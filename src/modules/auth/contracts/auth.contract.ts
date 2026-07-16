import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";
import { User } from "../../../generated/prisma/browser";

export interface IAuthService{
    register(data:RegisterDto):Promise<User>

    login(data:LoginDto):Promise<User>
}