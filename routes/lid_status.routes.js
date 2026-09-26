const { Router } = require("express");

const {
  lidStatusRegister, getLidStatuss, getLidStatusById, updateLidStatus, deleteLidStatus, searchLidStatus
} = require("../controllers/lid_status.controller");

const {
  registerLidStatusValidationSchema,
  updateLidStatusValidationSchema
} = require("../validation/lid_status.validation");

const { validateSchema } = require("../middleware/validateSchema");

const lidStatusRouter = Router();

lidStatusRouter.post(
  "/register",
  validateSchema(registerLidStatusValidationSchema),
  lidStatusRegister
);

lidStatusRouter.get(
  "/get",
  getLidStatuss
);

lidStatusRouter.get(
  "/get/:id",
  getLidStatusById
);

lidStatusRouter.put(
  "/update/:id",
  validateSchema(updateLidStatusValidationSchema),
  updateLidStatus
);

lidStatusRouter.delete(
  "/delete/:id",
  deleteLidStatus
);
lidStatusRouter.get("/search", searchLidStatus);

module.exports = { lidStatusRouter };
