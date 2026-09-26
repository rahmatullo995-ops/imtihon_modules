const { Router } = require("express");

const {
  staffRegister, getStaffs, getStaffById, updateStaff, deleteStaff, searchStaff
} = require("../controllers/staff.controller");

const {
  registerStaffValidationSchema,
  updateStaffValidationSchema
} = require("../validation/staff.validation");

const { validateSchema } = require("../middleware/validateSchema");

const staffRouter = Router();

staffRouter.post(
  "/register",
  validateSchema(registerStaffValidationSchema),
  staffRegister
);

staffRouter.get(
  "/get",
  getStaffs
);

staffRouter.get(
  "/get/:id",
  getStaffById
);

staffRouter.put(
  "/update/:id",
  validateSchema(updateStaffValidationSchema),
  updateStaff
);

staffRouter.delete(
  "/delete/:id",
  deleteStaff
);
staffRouter.get("/search", searchStaff);

module.exports = { staffRouter };
