import { Request, Response } from "express";
import { asyncHandler } from "../../errorHandlers/asyncHanlder";
import ResponseHandler from "../../utils/responseHandler";
import { createLabel } from "../../utils/labels";
import { AuthRequest } from "../../types/express";
import courseService from "./course.service";

const courseControllerLog = createLabel("COURSE_CONTROLLER_LOG");

class CourseController {
  findCourse = asyncHandler(async (req: Request, res: Response) => {
    const courseId = req.params.id as string;

    const course = await courseService.findCourse(courseId);

    courseControllerLog.info(`Course ${courseId} found successfully`);

    return ResponseHandler.success(
      res,
      "Course found successfully",
      course,
    );
  });

  createCourse = asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;

    const createdCourse = await courseService.createCourse(
      userId,
      req.body,
    );

    courseControllerLog.info(
      `User ${userId} created course ${createdCourse.id}`,
    );

    return ResponseHandler.success(
      res,
      "Course created successfully",
      createdCourse,
    );
  });

  updateCourse = asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;
    const courseId = req.params.id as string;

    const updatedCourse = await courseService.updateCourse(
      userId,
      courseId,
      req.body,
    );

    courseControllerLog.info(
      `User ${userId} updated course ${courseId}`,
    );

    return ResponseHandler.success(
      res,
      "Course updated successfully",
      updatedCourse,
    );
  });

  deleteCourse = asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;
    const courseId = req.params.id as string;

    await courseService.deleteCourse(userId, courseId);

    courseControllerLog.info(
      `User ${userId} deleted course ${courseId}`,
    );

    return ResponseHandler.success(
      res,
      "Course deleted successfully",
    );
  });
}

export default new CourseController();