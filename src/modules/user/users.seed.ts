import UserService from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { SafeUser } from "./user.service";



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