const { Student } = require("../models/studentsSchema");

const studentRegister = async (req, res) => {
  try {
    const {
      id, lid_id, first_name, last_name, phone_number, birthday, gender
    } = req.body;

    const newStudent = new Student({
      id,
      lid_id,
      first_name,
      last_name,
      phone_number,
      birthday,
      gender
    });

    await newStudent.save();

    return res.status(201).json({
      success: true,
      message: "Students muvaffaqiyatli qo'shildi",
      data: newStudent
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

const getStudents = async (req, res) => {
  try {
    const result = await Student.find({});

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

const getStudentById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Student.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Students topilmadi"
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

const updateStudent = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Student.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Students topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students yangilandi",
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

const deleteStudent = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Student.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Students topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students o'chirildi",
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

const searchStudent = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Student.find({
      $or: [
          { first_name: { $regex: query, $options: "i" } },
          { last_name: { $regex: query, $options: "i" } },
          { phone_number: { $regex: query, $options: "i" } },
          { gender: { $regex: query, $options: "i" } }
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
  studentRegister,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent, searchStudent
};
