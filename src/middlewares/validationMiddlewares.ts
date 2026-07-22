import { Request, Response, NextFunction } from "express";
import AppError from "../errorHandlers/appError";
import { ObjectSchema } from "joi";

export const validateBody =
  (schema: ObjectSchema) =>(req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      const errorMessages = error.details
        .map((detail) => detail.message)
        .join("; ");
      return next(new AppError(errorMessages, 400));
    }
    req.body = value;
    next();
  };

export const validateId = (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.params.id, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      const errorMessages = error.details
        .map((detail) => detail.message)
        .join("; ");
      return next(new AppError(errorMessages, 400));
    }
    req.body = value;
    next();
  };



// type ValidationTarget = "body" | "query" | "params";

// const validate = (
//   schema: ObjectSchema,
//   target: ValidationTarget = "body"
// ) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const { error, value } = schema.validate(req[target]);

//     if (error) {
//       return res.status(400).json({
//         message: error.details[0].message,
//       });
//     }

//     req[target] = value;

//     next();
//   };
// };

// export default validate;
