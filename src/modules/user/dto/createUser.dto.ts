import { Role } from "../../../generated/prisma/enums"

export interface CreateUserDto{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    role?:Role
}
