const Joi = require("joi");

const registerRoleValidationSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
});

const updateRoleValidationSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().optional()
});

module.exports = {
  registerRoleValidationSchema,
  updateRoleValidationSchema
};
