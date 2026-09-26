const Joi = require("joi");

const registerStuffRoleValidationSchema = Joi.object({
  id: Joi.number().required(),
  stuff_id: Joi.number().required(),
  role_id: Joi.number().required()
});

const updateStuffRoleValidationSchema = Joi.object({
  id: Joi.number().optional(),
  stuff_id: Joi.number().optional(),
  role_id: Joi.number().optional()
});

module.exports = {
  registerStuffRoleValidationSchema,
  updateStuffRoleValidationSchema
};
