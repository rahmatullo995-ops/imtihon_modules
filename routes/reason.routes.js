const { Router } = require("express");

const {
  reasonRegister, getReasons, getReasonById, updateReason, deleteReason, searchReason
} = require("../controllers/reason.controller");

const {
  registerReasonValidationSchema,
  updateReasonValidationSchema
} = require("../validation/reason.validation");

const { validateSchema } = require("../middleware/validateSchema");

const reasonRouter = Router();

reasonRouter.post(
  "/register",
  validateSchema(registerReasonValidationSchema),
  reasonRegister
);

reasonRouter.get(
  "/get",
  getReasons
);

reasonRouter.get(
  "/get/:id",
  getReasonById
);

reasonRouter.put(
  "/update/:id",
  validateSchema(updateReasonValidationSchema),
  updateReason
);

reasonRouter.delete(
  "/delete/:id",
  deleteReason
);
reasonRouter.get("/search", searchReason);

module.exports = { reasonRouter };
