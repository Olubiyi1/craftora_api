import { ICourseService } from "./contracts/course.contract";
import { UpdateCourseDto } from "./dto/updateCourseDto";
import { CreateCourseDto } from "./dto/createCourse.dto";
import AppError from "../../errorHandlers/appError";
import { Course } from "../../generated/prisma";
import prisma from "../../config/prisma";
import { createLabel } from "../../utils/labels";

const courseServiceLog = createLabel("COURSE_SERVICE_LOG");

class CourseService implements ICourseService {
  async findCourse(courseId: string) {
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    if (!course) {
      courseServiceLog.warn("Course not found");
      throw new AppError("Course not found", 404);
    }
    return course;
  }
  async createCourse(userId: string, data: CreateCourseDto): Promise<Course> {
    const instructor = await prisma.instructorProfile.findUnique({
      where: { userId },
    });

    if (!instructor) {
      courseServiceLog.warn("Instructor profiledoesn't exist");
      throw new AppError("Instructor profile not found", 404);
    }

    const exisitngCourse = await prisma.course.findUnique({
      where: { title: data.title },
    });
    if (exisitngCourse) {
      courseServiceLog.warn("Course title already exists");
      throw new AppError("Course tile already exists", 409);
    }
    const course = await prisma.course.create({
      data: {
        ...data,
        instructorProfileId: instructor.id,
      },
    });

    courseServiceLog.info(`course successfully created for ${instructor.id}`);

    return course;
  }

  async updateCourse(
    userId: string,
    courseId: string,
    data: UpdateCourseDto,
  ): Promise<Course> {
    // 1. Find instructor profile
    const instructor = await prisma.instructorProfile.findUnique({
      where: { userId },
    });

    if (!instructor) {
      courseServiceLog.warn("Instructor profile not found");
      throw new AppError("Instructor profile not found", 404);
    }

    // 2. Find the course
    const course = await this.findCourse(courseId);

    //Check ownership
    if (course.instructorProfileId !== instructor.id) {
      courseServiceLog.warn(
        "Instructor attempted to update another instructor's course",
      );
      throw new AppError("You are not allowed to update this course", 403);
    }

    // check for duplicate title
    const existingCourse = await prisma.course.findFirst({
      where: {
        title: data.title,
        NOT: {
          id: course.id,
        },
      },
    });

    if (existingCourse) {
      courseServiceLog.warn("Course title already exists");
      throw new AppError("Course title already exists", 409);
    }

    // Update
    const updatedCourse = await prisma.course.update({
      where: {
        id: course.id,
      },
      data,
    });

    courseServiceLog.info(`Course ${course.id} updated successfully`);

    return updatedCourse;
  }
  async deleteCourse(userId:string,courseId: string) {
    
    await this.findCourse(courseId);

    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });

    return deletedCourse;
  }
}

export default new CourseService;