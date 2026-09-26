const { Staff } = require("../models/staffSchema");

const staffRegister = async (req, res) => {
  try {
    const {
      id, first_name, last_name, phone_number, login, parol, is_active
    } = req.body;

    const newStaff = new Staff({
      id,
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    });

    await newStaff.save();

    return res.status(201).json({
      success: true,
      message: "Stuff 2 muvaffaqiyatli qo'shildi",
      data: newStaff
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

const getStaffs = async (req, res) => {
  try {
    const result = await Staff.find({});

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

const getStaffById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Staff.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stuff 2 topilmadi"
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

const updateStaff = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Staff.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stuff 2 topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stuff 2 yangilandi",
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

const deleteStaff = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Staff.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stuff 2 topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stuff 2 o'chirildi",
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

const searchStaff = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Staff.find({
      $or: [
          { first_name: { $regex: query, $options: "i" } },
          { last_name: { $regex: query, $options: "i" } },
          { phone_number: { $regex: query, $options: "i" } },
          { login: { $regex: query, $options: "i" } }
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
  staffRegister,
  getStaffs,
  getStaffById,
  updateStaff,
  deleteStaff, searchStaff
};
