const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  status: {type: String, required: true, trim: true}
});

const LidStatus = model("lid_status", schema);

module.exports = { LidStatus };
