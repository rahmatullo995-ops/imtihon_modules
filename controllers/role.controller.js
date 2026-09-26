const { Role } = require("../models/roleSchema");

const roleRegister = async (req, res) => {
  try {
    const {
      id, name
    } = req.body;

    const newRole = new Role({
      id,
      name
    });

    await newRole.save();

    return res.status(201).json({
      success: true,
      message: "Role muvaffaqiyatli qo'shildi",
      data: newRole
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

const getRoles = async (req, res) => {
  try {
    const result = await Role.find({});

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

const getRoleById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Role.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi"
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

const updateRole = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Role.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Role yangilandi",
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

const deleteRole = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Role.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Role o'chirildi",
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

const searchRole = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Role.find({
      $or: [
          { name: { $regex: query, $options: "i" } }
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
  roleRegister,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole, searchRole
};
