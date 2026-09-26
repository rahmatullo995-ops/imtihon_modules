const { Group } = require("../models/groupSchema");

const groupRegister = async (req, res) => {
  try {
    const {
      id, group_name, lesson_start_time, lesson_continuous, lesson_week_day, group_stage_id, room_number, room_floor, branch_id, lessons_quant, is_active
    } = req.body;

    const newGroup = new Group({
      id,
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_id,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active
    });

    await newGroup.save();

    return res.status(201).json({
      success: true,
      message: "Group muvaffaqiyatli qo'shildi",
      data: newGroup
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

const getGroups = async (req, res) => {
  try {
    const result = await Group.find({}).populate("group_stage_id").populate("branch_id");

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

const getGroupById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Group.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi"
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

const updateGroup = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Group.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Group yangilandi",
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

const deleteGroup = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Group.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Group o'chirildi",
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

const searchGroup = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Group.find({
      $or: [
          { group_name: { $regex: query, $options: "i" } },
          { lesson_start_time: { $regex: query, $options: "i" } },
          { lesson_week_day: { $regex: query, $options: "i" } },
          { room_number: { $regex: query, $options: "i" } }
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
  groupRegister,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup, searchGroup
};
