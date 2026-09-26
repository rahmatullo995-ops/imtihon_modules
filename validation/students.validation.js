const Joi = require("joi");

const registerStudentValidationSchema = Joi.object({
  id: Joi.number().required(),
  lid_id: Joi.number().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().required(),
  birthday: Joi.date().required(),
  gender: Joi.string().required()
});

const updateStudentValidationSchema = Joi.object({
  id: Joi.number().optional(),
  lid_id: Joi.number().optional(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone_number: Joi.string().optional(),
  birthday: Joi.date().optional(),
  gender: Joi.string().optional()
});

module.exports = {
  registerStudentValidationSchema,
  updateStudentValidationSchema
};
