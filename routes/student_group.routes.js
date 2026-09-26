const { Router } = require("express");

const {
  studentGroupRegister, getStudentGroups, getStudentGroupById, updateStudentGroup, deleteStudentGroup
} = require("../controllers/student_group.controller");

const {
  registerStudentGroupValidationSchema,
  updateStudentGroupValidationSchema
} = require("../validation/student_group.validation");

const { validateSchema } = require("../middleware/validateSchema");

const studentGroupRouter = Router();

studentGroupRouter.post(
  "/register",
  validateSchema(registerStudentGroupValidationSchema),
  studentGroupRegister
);

studentGroupRouter.get(
  "/get",
  getStudentGroups
);

studentGroupRouter.get(
  "/get/:id",
  getStudentGroupById
);

studentGroupRouter.put(
  "/update/:id",
  validateSchema(updateStudentGroupValidationSchema),
  updateStudentGroup
);

studentGroupRouter.delete(
  "/delete/:id",
  deleteStudentGroup
);

module.exports = { studentGroupRouter };
