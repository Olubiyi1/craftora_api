import { Request, Response } from "express";
import ResponseHandler from "../../utils/responseHandler";
import { AuthRequest } from "../../types/express";
import instructorService from "./instructor.service";

class InstructorController {
  async createInstructorProfile(req: AuthRequest, res: Response) {
    const profileData = req.body;
    const userId = req.user?.id as string;
    const profile = await instructorService.createProfile(userId, profileData);

    return ResponseHandler.success(
      res,
      "profile successfully created",
      profile,
    );
  }
}

export default new InstructorController;
