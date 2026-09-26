const { Branch } = require("../models/branchSchema");

const branchRegister = async (req, res) => {
  try {
    const {
      name, address, call_number
    } = req.body;

    const newBranch = new Branch({
      name,
      address,
      call_number
    });

    await newBranch.save();

    return res.status(201).json({
      success: true,
      message: "Branch muvaffaqiyatli qo'shildi",
      data: newBranch
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

const getBranchs = async (req, res) => {
  try {
    const result = await Branch.find({});

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

const getBranchById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Branch.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

const updateBranch = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Branch.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Branch yangilandi",
      data: result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

const deleteBranch = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Branch.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Branch o'chirildi",
      data: result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

const searchBranch = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Branch.find({
      $or: [
          { name: { $regex: query, $options: "i" } },
          { address: { $regex: query, $options: "i" } },
          { call_number: { $regex: query, $options: "i" } }
      ]
    });

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message
    });
  }
};

module.exports = {
  branchRegister,
  getBranchs,
  getBranchById,
  updateBranch,
  deleteBranch, searchBranch
};
