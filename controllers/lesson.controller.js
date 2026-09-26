const { Lesson } = require("../models/lessonSchema");

const lessonRegister = async (req, res) => {
  try {
    const {
      id, lesson_theme, lesson_number, group_id, lesson_date
    } = req.body;

    const newLesson = new Lesson({
      id,
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date
    });

    await newLesson.save();

    return res.status(201).json({
      success: true,
      message: "Lesson muvaffaqiyatli qo'shildi",
      data: newLesson
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

const getLessons = async (req, res) => {
  try {
    const result = await Lesson.find({});

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

const getLessonById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Lesson.findOne({ id }).populate("group_id");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lesson topilmadi"
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

const updateLesson = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Lesson.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lesson topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lesson yangilandi",
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

const deleteLesson = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Lesson.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lesson topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lesson o'chirildi",
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

const searchLesson = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Lesson.find({
      $or: [
          { lesson_theme: { $regex: query, $options: "i" } }
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
  lessonRegister,
  getLessons,
  getLessonById,
  updateLesson,
  deleteLesson, searchLesson
};
