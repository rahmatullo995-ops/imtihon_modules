const { Router } = require("express");

const {
  groupStaffRegister, getGroupStaffs, getGroupStaffById, updateGroupStaff, deleteGroupStaff
} = require("../controllers/group_staff.controller");

const {
  registerGroupStaffValidationSchema,
  updateGroupStaffValidationSchema
} = require("../validation/group_staff.validation");

const { validateSchema } = require("../middleware/validateSchema.js");


const groupStaffRouter = Router();

groupStaffRouter.post(
  "/register",
  validateSchema(registerGroupStaffValidationSchema),
  groupStaffRegister
);

groupStaffRouter.get(
  "/get",
  getGroupStaffs
);

groupStaffRouter.get(
  "/get/:id",
  getGroupStaffById
);

groupStaffRouter.put(
  "/update/:id",
  validateSchema(updateGroupStaffValidationSchema),
  updateGroupStaff
);

groupStaffRouter.delete(
  "/delete/:id",
  deleteGroupStaff
);

module.exports = { groupStaffRouter };
