import Joi from "joi";
import { validationMessages } from "../../utils/validationMessages";

const tradeValidationSchema = Joi.object({
    tradeName:Joi.string().required().messages(validationMessages.tradeName)

})