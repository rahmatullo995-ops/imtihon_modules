const { Stage } = require("../models/stageSchema");

const stageRegister = async (req, res) => {
  try {
    const {
      id, name
    } = req.body;

    const newStage = new Stage({
      id,
      name
    });

    await newStage.save();

    return res.status(201).json({
      success: true,
      message: "Stage muvaffaqiyatli qo'shildi",
      data: newStage
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

const getStages = async (req, res) => {
  try {
    const result = await Stage.find({});

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

const getStageById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Stage.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi"
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

const updateStage = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Stage.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stage yangilandi",
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

const deleteStage = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Stage.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stage o'chirildi",
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

const searchStage = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Stage.find({
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
  stageRegister,
  getStages,
  getStageById,
  updateStage,
  deleteStage, searchStage
};
