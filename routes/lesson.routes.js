const { Router } = require("express");

const {
  lessonRegister, getLessons, getLessonById, updateLesson, deleteLesson, searchLesson
} = require("../controllers/lesson.controller");

const {
  registerLessonValidationSchema,
  updateLessonValidationSchema
} = require("../validation/lesson.validation");

const { validateSchema } = require("../middleware/validateSchema");

const lessonRouter = Router();

lessonRouter.post(
  "/register",
  validateSchema(registerLessonValidationSchema),
  lessonRegister
);

lessonRouter.get(
  "/get",
  getLessons
);

lessonRouter.get(
  "/get/:id",
  getLessonById
);

lessonRouter.put(
  "/update/:id",
  validateSchema(updateLessonValidationSchema),
  updateLesson
);

lessonRouter.delete(
  "/delete/:id",
  deleteLesson
);
lessonRouter.get("/search", searchLesson);

module.exports = { lessonRouter };
