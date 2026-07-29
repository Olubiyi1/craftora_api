import UserService from "./modules/user/user.service";
import { CreateUserDto } from "./modules/user/dto/createUser.dto";
import { SafeUser } from "./modules/user/user.service";



const userService = new UserService
export const seedUsers = async():Promise<SafeUser>=>{
  
    const newUser = await userService.createUser({
        firstName:"Babajide",
        lastName:"Daniel",
        email:"instructor@gmail.com",
        password:"Loverboy1#",
        role:"INSTRUCTOR"
    })
    return newUser;

}