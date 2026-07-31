import instructorController from "./instructor.controller";
import { Router } from "express";
// import { restrictTo } from "../../middlewares/restrictTo";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { restrictTo } from "../../middlewares/restrictTo";
import { Role } from "../../generated/prisma";
const instructorRoute = Router()

instructorRoute.post("/",authMiddleware,restrictTo(Role.INSTRUCTOR),instructorController.createInstructorProfile)

export default instructorRoute;