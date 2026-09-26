const Joi = require("joi");

const registerReasonValidationSchema = Joi.object({
  id: Joi.number().required(),
  reason_id: Joi.string().required()
});

const updateReasonValidationSchema = Joi.object({
  id: Joi.number().optional(),
  reason_id: Joi.string().optional()
});

module.exports = {
  registerReasonValidationSchema,
  updateReasonValidationSchema
};
