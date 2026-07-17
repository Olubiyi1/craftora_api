import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";
import { SafeUser } from "../../user/user.service";
import { Tokens } from "../auth.tokens.types";
import { ResetPasswordDto } from "../dto/resetPassword.dto";


export interface IAuthService{
    register(data:RegisterDto):Promise<{user:SafeUser;tokens:Tokens}>
    login(data:LoginDto):Promise<{user:SafeUser;tokens:Tokens}>
    forgotPassword(email:string):Promise<void>
    resetPassword(data:ResetPasswordDto):Promise<void>
}