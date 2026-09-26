const { GroupStaff } = require("../models/group_staffSchema");

const groupStaffRegister = async (req, res) => {
  try {
    const {
      id, group_id, stuff_id
    } = req.body;

    const newGroupStaff = new GroupStaff({
      id,
      group_id,
      stuff_id
    });

    await newGroupStaff.save();

    return res.status(201).json({
      success: true,
      message: "GroupStaff muvaffaqiyatli qo'shildi",
      data: newGroupStaff
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

const getGroupStaffs = async (req, res) => {
  try {
    const result = await GroupStaff.find({});

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

const getGroupStaffById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await GroupStaff.findOne({ id }).populate("group_id").populate("stuff_id");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "GroupStaff topilmadi"
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

const updateGroupStaff = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await GroupStaff.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "GroupStaff topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "GroupStaff yangilandi",
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

const deleteGroupStaff = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await GroupStaff.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "GroupStaff topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "GroupStaff o'chirildi",
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
  groupStaffRegister,
  getGroupStaffs,
  getGroupStaffById,
  updateGroupStaff,
  deleteGroupStaff
};
