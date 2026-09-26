const { StuffRole } = require("../models/stuff_roleSchema");

const stuffRoleRegister = async (req, res) => {
  try {
    const {
      id, stuff_id, role_id
    } = req.body;

    const newStuffRole = new StuffRole({
      id,
      stuff_id,
      role_id
    });

    await newStuffRole.save();

    return res.status(201).json({
      success: true,
      message: "StuffRole muvaffaqiyatli qo'shildi",
      data: newStuffRole
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

const getStuffRoles = async (req, res) => {
  try {
    const result = await StuffRole.find({});

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

const getStuffRoleById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StuffRole.findOne({ id }).populate("stuff_id").populate("role_id");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StuffRole topilmadi"
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

const updateStuffRole = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await StuffRole.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StuffRole topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StuffRole yangilandi",
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

const deleteStuffRole = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StuffRole.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StuffRole topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StuffRole o'chirildi",
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
  stuffRoleRegister,
  getStuffRoles,
  getStuffRoleById,
  updateStuffRole,
  deleteStuffRole
};
