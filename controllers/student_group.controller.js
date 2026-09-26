const { StudentGroup } = require("../models/student_groupSchema");

const studentGroupRegister = async (req, res) => {
  try {
    const {
      id, student_id, group_id
    } = req.body;

    const newStudentGroup = new StudentGroup({
      id,
      student_id,
      group_id
    });

    await newStudentGroup.save();

    return res.status(201).json({
      success: true,
      message: "StudentGroup muvaffaqiyatli qo'shildi",
      data: newStudentGroup
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

const getStudentGroups = async (req, res) => {
  try {
    const result = await StudentGroup.find({}).populate("student_id").populate("group_id")

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

const getStudentGroupById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StudentGroup.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup topilmadi"
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

const updateStudentGroup = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await StudentGroup.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentGroup yangilandi",
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

const deleteStudentGroup = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StudentGroup.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentGroup o'chirildi",
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
  studentGroupRegister,
  getStudentGroups,
  getStudentGroupById,
  updateStudentGroup,
  deleteStudentGroup
};
