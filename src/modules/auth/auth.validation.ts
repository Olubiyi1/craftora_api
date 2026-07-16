import { validationMessages } from "../../utils/validationMessages";
import Joi from "joi";
import { Role } from "../../generated/prisma/enums";

// user registration
export const registerValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required()
    .messages(validationMessages.firstName),

  lastName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .messages(validationMessages.lastName),

  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .lowercase()
    .messages(validationMessages.email),

  password: Joi.string()
    .trim()
    .required()
    .min(8)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",
      ),
    )
    .messages(validationMessages.password),

  role: Joi.string()
    .valid(...Object.values(Role))
    .optional()
    .messages(validationMessages.role),
}).unknown(false);

// user login
export const loginValidationSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required()
    .messages(validationMessages.email),

  password: Joi.string()
    .trim()
    .required()
    .messages(validationMessages.password),
}).unknown();
