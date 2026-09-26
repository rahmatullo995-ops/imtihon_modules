const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  student_id: {type: Number, required: true},
  payment_last_date: {type: Date, required: true},
  payment_date: {type: Date, required: true},
  price: {type: Number, required: true},
  is_paid: {type: Boolean, required: true},
  total_attent: {type: Number, required: true}
});

const Payment = model("payment", schema);

module.exports = { Payment };
