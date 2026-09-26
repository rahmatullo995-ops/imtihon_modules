const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  phone_number: {type: String, required: true, trim: true},
  login: {type: String, required: true, trim: true},
  parol: {type: String, required: true, trim: true},
  is_active: {type: Boolean, required: true}
});

const Staff = model("staff", schema);

module.exports = { Staff };
