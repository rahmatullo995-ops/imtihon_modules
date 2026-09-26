const { Router } = require("express");

const {
  paymentRegister, getPayments, getPaymentById, updatePayment, deletePayment
} = require("../controllers/payment.controller");

const {
  registerPaymentValidationSchema,
  updatePaymentValidationSchema
} = require("../validation/payment.validation");

const { validateSchema } = require("../middleware/validateSchema");

const paymentRouter = Router();

paymentRouter.post(
  "/register",
  validateSchema(registerPaymentValidationSchema),
  paymentRegister
);

paymentRouter.get(
  "/get",
  getPayments
);

paymentRouter.get(
  "/get/:id",
  getPaymentById
);

paymentRouter.put(
  "/update/:id",
  validateSchema(updatePaymentValidationSchema),
  updatePayment
);

paymentRouter.delete(
  "/delete/:id",
  deletePayment
);

module.exports = { paymentRouter };
