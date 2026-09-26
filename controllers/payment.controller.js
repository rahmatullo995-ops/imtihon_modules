const { Payment } = require("../models/paymentSchema");

const paymentRegister = async (req, res) => {
  try {
    const {
      id, student_id, payment_last_date, payment_date, price, is_paid, total_attent
    } = req.body;

    const newPayment = new Payment({
      id,
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent
    });

    await newPayment.save();

    return res.status(201).json({
      success: true,
      message: "Payment muvaffaqiyatli qo'shildi",
      data: newPayment
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

const getPayments = async (req, res) => {
  try {
    const result = await Payment.find({});

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

const getPaymentById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Payment.findOne({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi"
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

const updatePayment = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await Payment.findOneAndUpdate(
      { id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment yangilandi",
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

const deletePayment = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Payment.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment o'chirildi",
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
  paymentRegister,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment
};
