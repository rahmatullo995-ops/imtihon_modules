const { LidStatus } = require("../models/lid_statusSchema");

const lidStatusRegister = async (req, res) => {
  try {
    const {
      id, status
    } = req.body;

    const newLidStatus = new LidStatus({
      id,
      status
    });

    await newLidStatus.save();

    return res.status(201).json({
      success: true,
      message: "LidStatus muvaffaqiyatli qo'shildi",
      data: newLidStatus
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

const getLidStatuss = async (req, res) => {
  try {
    const result = await LidStatus.find({});

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

const getLidStatusById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await LidStatus.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "LidStatus topilmadi"
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

const updateLidStatus = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await LidStatus.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "LidStatus topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "LidStatus yangilandi",
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

const deleteLidStatus = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await LidStatus.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "LidStatus topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "LidStatus o'chirildi",
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

const searchLidStatus = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv so'zini kiriting."
      });
    }

    const result = await LidStatus.find({
      $or: [
          { status: { $regex: query, $options: "i" } }
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
  lidStatusRegister,
  getLidStatuss,
  getLidStatusById,
  updateLidStatus,
  deleteLidStatus, searchLidStatus
};
