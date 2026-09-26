const Joi = require("joi");

const registerGroupStaffValidationSchema = Joi.object({
  id: Joi.number().required(),
  group_id: Joi.number().required(),
  stuff_id: Joi.number().required()
});

const updateGroupStaffValidationSchema = Joi.object({
  id: Joi.number().optional(),
  group_id: Joi.number().optional(),
  stuff_id: Joi.number().optional()
});

module.exports = {
  registerGroupStaffValidationSchema,
  updateGroupStaffValidationSchema
};
