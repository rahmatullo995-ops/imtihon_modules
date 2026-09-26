const Joi = require("joi");

const registerStudentLessonValidationSchema = Joi.object({
  id: Joi.number().required(),
  lesson_id: Joi.number().required(),
  student_id: Joi.number().required(),
  is_there: Joi.boolean().required(),
  reason: Joi.string().required(),
  has_paid: Joi.boolean().required()
});

const updateStudentLessonValidationSchema = Joi.object({
  id: Joi.number().optional(),
  lesson_id: Joi.number().optional(),
  student_id: Joi.number().optional(),
  is_there: Joi.boolean().optional(),
  reason: Joi.string().optional(),
  has_paid: Joi.boolean().optional()
});

module.exports = {
  registerStudentLessonValidationSchema,
  updateStudentLessonValidationSchema
};
