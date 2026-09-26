const { Router } = require("express");

const {
  studentRegister, getStudents, getStudentById, updateStudent, deleteStudent, searchStudent
} = require("../controllers/students.controller");

const {
  registerStudentValidationSchema,
  updateStudentValidationSchema
} = require("../validation/students.validation");

const { validateSchema } = require("../middleware/validateSchema.js");

const studentRouter = Router();

studentRouter.post(
  "/register",
  validateSchema(registerStudentValidationSchema),
  studentRegister
);

studentRouter.get(
  "/get",
  getStudents
);

studentRouter.get(
  "/get/:id",
  getStudentById
);

studentRouter.put(
  "/update/:id",
  validateSchema(updateStudentValidationSchema),
  updateStudent
);

studentRouter.delete(
  "/delete/:id",
  deleteStudent
);
studentRouter.get("/search", searchStudent);

module.exports = { studentRouter };
