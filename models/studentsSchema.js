const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  lid_id: {type: Number, required: true},
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  phone_number: {type: String, required: true, trim: true},
  birthday: {type: Date, required: true},
  gender: {type: String, required: true, trim: true}
});

const Student = model("students", schema);

module.exports = { Student };
