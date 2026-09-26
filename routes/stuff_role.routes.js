const { Router } = require("express");

const {
  stuffRoleRegister, getStuffRoles, getStuffRoleById, updateStuffRole, deleteStuffRole
} = require("../controllers/stuff_role.controller");

const {
  registerStuffRoleValidationSchema,
  updateStuffRoleValidationSchema
} = require("../validation/stuff_role.validation");

const { validateSchema } = require("../middleware/validateSchema");

const stuffRoleRouter = Router();

stuffRoleRouter.post(
  "/register",
  validateSchema(registerStuffRoleValidationSchema),
  stuffRoleRegister
);

stuffRoleRouter.get(
  "/get",
  getStuffRoles
);

stuffRoleRouter.get(
  "/get/:id",
  getStuffRoleById
);

stuffRoleRouter.put(
  "/update/:id",
  validateSchema(updateStuffRoleValidationSchema),
  updateStuffRole
);

stuffRoleRouter.delete(
  "/delete/:id",
  deleteStuffRole
);

module.exports = { stuffRoleRouter };
