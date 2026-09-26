const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {type: String, required: true, trim: true},
  address: {type: String, required: true, trim: true},
  call_number: {type: String, required: true, trim: true}
});

const Branch = model("branch", schema);

module.exports = { Branch };
