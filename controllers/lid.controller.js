const { Lid } = require("../models/lidSchema");

const lidRegister = async (req, res) => {
  try {
    const {
      id, first_name, last_name, phone_number, lid_stage_id, test_date, trial_lesson_date, trial_lesson_time, trial_lesson_group_id, lid_status_id, cancel_reason_id
    } = req.body;

    const newLid = new Lid({
      id,
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id
    });

    await newLid.save();

    return res.status(201).json({
      success: true,
      message: "Lid muvaffaqiyatli qo'shildi",
      data: newLid
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

const getLids = async (req, res) => {
  try {
    const result = await Lid.find({});

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

const getLidById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Lid.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi"
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

const updateLid = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Lid.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lid yangilandi",
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

const deleteLid = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Lid.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lid o'chirildi",
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

const searchLid = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Lid.find({
      $or: [
          { first_name: { $regex: query, $options: "i" } },
          { last_name: { $regex: query, $options: "i" } },
          { phone_number: { $regex: query, $options: "i" } }
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
  lidRegister,
  getLids,
  getLidById,
  updateLid,
  deleteLid, searchLid
};
