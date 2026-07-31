import { Course } from "../../../generated/prisma";
import { CreateCourseDto } from "../dto/createCourse.dto";
import { UpdateCourseDto } from "../dto/updateCourseDto";

export interface ICourseService{
    createCourse(userId:string,data:CreateCourseDto):Promise<Course>
    updateCourse(userId:string,courseId:string,data:UpdateCourseDto):Promise<Course>
}