const Joi = require("joi");

const registerLidStatusValidationSchema = Joi.object({
  id: Joi.number().required(),
  status: Joi.string().required()
});

const updateLidStatusValidationSchema = Joi.object({
  id: Joi.number().optional(),
  status: Joi.string().optional()
});

module.exports = {
  registerLidStatusValidationSchema,
  updateLidStatusValidationSchema
};
