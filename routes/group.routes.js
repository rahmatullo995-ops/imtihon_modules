const { Router } = require("express");

const {
  groupRegister, getGroups, getGroupById, updateGroup, deleteGroup, searchGroup
} = require("../controllers/group.controller");

const {
  registerGroupValidationSchema,
  updateGroupValidationSchema
} = require("../validation/group.validation");

const { validateSchema } = require("../middleware/validateSchema");

const groupRouter = Router();

groupRouter.post(
  "/register",
  validateSchema(registerGroupValidationSchema),
  groupRegister
);

groupRouter.get(
  "/get",
  getGroups
);

groupRouter.get(
  "/get/:id",
  getGroupById
);

groupRouter.put(
  "/update/:id",
  validateSchema(updateGroupValidationSchema),
  updateGroup
);

groupRouter.delete(
  "/delete/:id",
  deleteGroup
);
groupRouter.get("/search", searchGroup);

module.exports = { groupRouter };
