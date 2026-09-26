const Joi = require("joi");

const registerPaymentValidationSchema = Joi.object({
  id: Joi.number().required(),
  student_id: Joi.number().required(),
  payment_last_date: Joi.date().required(),
  payment_date: Joi.date().required(),
  price: Joi.number().required(),
  is_paid: Joi.boolean().required(),
  total_attent: Joi.number().required()
});

const updatePaymentValidationSchema = Joi.object({
  id: Joi.number().optional(),
  student_id: Joi.number().optional(),
  payment_last_date: Joi.date().optional(),
  payment_date: Joi.date().optional(),
  price: Joi.number().optional(),
  is_paid: Joi.boolean().optional(),
  total_attent: Joi.number().optional()
});

module.exports = {
  registerPaymentValidationSchema,
  updatePaymentValidationSchema
};
