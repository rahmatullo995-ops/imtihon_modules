const Joi = require("joi");

const registerStudentGroupValidationSchema = Joi.object({
  id: Joi.number().required(),
  student_id: Joi.number().required(),
  group_id: Joi.number().required()
});

const updateStudentGroupValidationSchema = Joi.object({
  id: Joi.number().optional(),
  student_id: Joi.number().optional(),
  group_id: Joi.number().optional()
});

module.exports = {
  registerStudentGroupValidationSchema,
  updateStudentGroupValidationSchema
};
