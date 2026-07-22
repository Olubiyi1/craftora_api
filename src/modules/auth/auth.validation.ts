import { validationMessages } from "../../utils/validationMessages";
import Joi from "joi";

export const registerUserValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required()
    .messages(validationMessages.firstName),

  lastName: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required()
    .messages(validationMessages.lastName),
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required()
    .messages(validationMessages.email),

  password: Joi.string()
    .trim()
    .min(8)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",
      ),
    )
    .required()
    .messages(validationMessages.password)
});

export const loginValidationSchema = Joi.object({
  email:Joi.string()
  .trim()
  .trim()
  .lowercase()
  .email({tlds:{allow:false}})
  .required()
  .messages(validationMessages.email),

  password:Joi.string()
  .trim()
  .min(8)
  .max(30)
  .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",),)
  .required()
  .messages(validationMessages.password)
})

export const changePasswordValidationSchema = Joi.object({
  currentPassword:Joi.string()
  .trim()
  .min(8)
  .max(30)
  .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",),)
  .required()
  .messages(validationMessages.password),

  newPassword:Joi.string()
  .trim()
  .min(8)
  .max(30)
  .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",),)
  .required()
  .messages(validationMessages.password)
})
