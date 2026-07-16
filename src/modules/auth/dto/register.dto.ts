import { Role } from "../../../generated/prisma/enums";

export interface RegisterDto{
    firstName:string,
    lastName:string,
    password:string,
    email:string,
    role?:Role
}
