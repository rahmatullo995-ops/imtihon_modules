const { Router } = require("express");

const {
  studentLessonRegister, getStudentLessons, getStudentLessonById, updateStudentLesson, deleteStudentLesson, searchStudentLesson
} = require("../controllers/student_lesson.controller");

const {
  registerStudentLessonValidationSchema,
  updateStudentLessonValidationSchema
} = require("../validation/student_lesson.validation");

const { validateSchema } = require("../middleware/validateSchema");

const studentLessonRouter = Router();

studentLessonRouter.post(
  "/register",
  validateSchema(registerStudentLessonValidationSchema),
  studentLessonRegister
);

studentLessonRouter.get(
  "/get",
  getStudentLessons
);

studentLessonRouter.get(
  "/get/:id",
  getStudentLessonById
);

studentLessonRouter.put(
  "/update/:id",
  validateSchema(updateStudentLessonValidationSchema),
  updateStudentLesson
);

studentLessonRouter.delete(
  "/delete/:id",
  deleteStudentLesson
);
studentLessonRouter.get("/search", searchStudentLesson);

module.exports = { studentLessonRouter };
