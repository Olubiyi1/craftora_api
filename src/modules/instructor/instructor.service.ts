import { InstructorProfile } from "../../generated/prisma";
import { IInstructorService } from "./contract/instructor.contract";
import AppError from "../../errorHandlers/appError";
import { CreateProfileDto } from "./dto/createProfile.dto";
import prisma from "../../config/prisma";
import { createLabel } from "../../utils/labels";

const instructorProfileLog = createLabel("INSTRUCTOR_PROFILE");

export type SafeInstructorProfile = Omit<InstructorProfile,"paystackRecipientCode">;

class InstructorService implements IInstructorService {
  async createProfile(userId: string,data: CreateProfileDto,): Promise<SafeInstructorProfile> {
    const existingProfile = await prisma.instructorProfile.findUnique({
      where: { userId },
    });
    if (existingProfile) {
      instructorProfileLog.warn("Instructor profile already exists");
      throw new AppError("Instructor profile already exists", 409);
    }

    const profile = await prisma.instructorProfile.create({
      data: {
        ...data,
        userId,
      },
    });
    const { paystackRecipientCode, ...safeProfile } = profile;

    return safeProfile;
  }
}
export default new InstructorService();
