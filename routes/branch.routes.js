const { Router } = require("express");

const {
  branchRegister, getBranchs, getBranchById, updateBranch, deleteBranch, searchBranch
} = require("../controllers/branch.controller");

const {
  registerBranchValidationSchema,
  updateBranchValidationSchema
} = require("../validation/branch.validation");
const { validateSchema } = require("../middleware/validateSchema.js");



const branchRouter = Router();

branchRouter.post(
  "/register",
  validateSchema(registerBranchValidationSchema),
  branchRegister
);

branchRouter.get(
  "/get",
  getBranchs
);

branchRouter.get(
  "/get/:id",
  getBranchById
);

branchRouter.put(
  "/update/:id",
  validateSchema(updateBranchValidationSchema),
  updateBranch
);

branchRouter.delete(
  "/delete/:id",
  deleteBranch
);
branchRouter.get("/search", searchBranch);

module.exports = { branchRouter };
