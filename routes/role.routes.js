const { Router } = require("express");

const {
  roleRegister, getRoles, getRoleById, updateRole, deleteRole, searchRole
} = require("../controllers/role.controller");

const {
  registerRoleValidationSchema,
  updateRoleValidationSchema
} = require("../validation/role.validation");

const { validateSchema } = require("../middleware/validateSchema");

const roleRouter = Router();

roleRouter.post(
  "/register",
  validateSchema(registerRoleValidationSchema),
  roleRegister
);

roleRouter.get(
  "/get",
  getRoles
);

roleRouter.get(
  "/get/:id",
  getRoleById
);

roleRouter.put(
  "/update/:id",
  validateSchema(updateRoleValidationSchema),
  updateRole
);

roleRouter.delete(
  "/delete/:id",
  deleteRole
);
roleRouter.get("/search", searchRole);

module.exports = { roleRouter };
