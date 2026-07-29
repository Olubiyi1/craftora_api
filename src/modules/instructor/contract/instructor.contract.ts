import { CreateProfileDto } from "../dto/createProfile.dto";
import { SafeInstructorProfile } from "../instructor.service";


export interface IInstructorService{
    createProfile(userId:string,data:CreateProfileDto):Promise<SafeInstructorProfile>
}