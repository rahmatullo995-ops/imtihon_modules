const Joi = require("joi");

const registerStageValidationSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
});

const updateStageValidationSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().optional()
});

module.exports = {
  registerStageValidationSchema,
  updateStageValidationSchema
};
