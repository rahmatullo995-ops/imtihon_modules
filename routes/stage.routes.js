const { Router } = require("express");

const {
  stageRegister, getStages, getStageById, updateStage, deleteStage, searchStage
} = require("../controllers/stage.controller");

const {
  registerStageValidationSchema,
  updateStageValidationSchema
} = require("../validation/stage.validation");
const { validateSchema } = require("../middleware/validateSchema.js");



const stageRouter = Router();

stageRouter.post(
  "/register",
  validateSchema(registerStageValidationSchema),
  stageRegister
);

stageRouter.get(
  "/get",
  getStages
);

stageRouter.get(
  "/get/:id",
  getStageById
);

stageRouter.put(
  "/update/:id",
  validateSchema(updateStageValidationSchema),
  updateStage
);

stageRouter.delete(
  "/delete/:id",
  deleteStage
);
stageRouter.get("/search", searchStage);

module.exports = { stageRouter };
