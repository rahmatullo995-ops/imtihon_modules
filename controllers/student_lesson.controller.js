const { StudentLesson } = require("../models/student_lessonSchema");

const studentLessonRegister = async (req, res) => {
  try {
    const {
      id, lesson_id, student_id, is_there, reason, has_paid
    } = req.body;

    const newStudentLesson = new StudentLesson({
      id,
      lesson_id,
      student_id,
      is_there,
      reason,
      has_paid
    });

    await newStudentLesson.save();

    return res.status(201).json({
      success: true,
      message: "StudentLesson muvaffaqiyatli qo'shildi",
      data: newStudentLesson
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

const getStudentLessons = async (req, res) => {
  try {
    const result = await StudentLesson.find({});

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

const getStudentLessonById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StudentLesson.findOne({ id }).populate("lesson_id").populate("student_id");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson topilmadi"
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

const updateStudentLesson = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await StudentLesson.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentLesson yangilandi",
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

const deleteStudentLesson = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await StudentLesson.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentLesson o'chirildi",
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

const searchStudentLesson = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await StudentLesson.find({
      $or: [
          { reason: { $regex: query, $options: "i" } }
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
  studentLessonRegister,
  getStudentLessons,
  getStudentLessonById,
  updateStudentLesson,
  deleteStudentLesson, searchStudentLesson
};
