const { Reason } = require("../models/reasonSchema");

const reasonRegister = async (req, res) => {
  try {
    const {
      id, reason_id
    } = req.body;

    const newReason = new Reason({
      id,
      reason_id
    });

    await newReason.save();

    return res.status(201).json({
      success: true,
      message: "Reason muvaffaqiyatli qo'shildi",
      data: newReason
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

const getReasons = async (req, res) => {
  try {
    const result = await Reason.find({});

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

const getReasonById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Reason.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi"
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

const updateReason = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Reason.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reason yangilandi",
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

const deleteReason = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Reason.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reason o'chirildi",
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

const searchReason = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await Reason.find({
      $or: [
          { reason_id: { $regex: query, $options: "i" } }
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
  reasonRegister,
  getReasons,
  getReasonById,
  updateReason,
  deleteReason, searchReason
};
