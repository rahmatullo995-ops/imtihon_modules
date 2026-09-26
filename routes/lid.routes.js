const { Router } = require("express");

const {
  lidRegister, getLids, getLidById, updateLid, deleteLid, searchLid
} = require("../controllers/lid.controller");

const {
  registerLidValidationSchema,
  updateLidValidationSchema
} = require("../validation/lid.validation");

const { validateSchema } = require("../middleware/validateSchema");

const lidRouter = Router();

lidRouter.post(
  "/register",
  validateSchema(registerLidValidationSchema),
  lidRegister
);

lidRouter.get(
  "/get",
  getLids
);

lidRouter.get(
  "/get/:id",
  getLidById
);

lidRouter.put(
  "/update/:id",
  validateSchema(updateLidValidationSchema),
  updateLid
);

lidRouter.delete(
  "/delete/:id",
  deleteLid
);
lidRouter.get("/search", searchLid);

module.exports = { lidRouter };
