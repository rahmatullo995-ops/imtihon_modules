const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  reason_id: {type: String, required: true, trim: true}
});

const Reason = model("reason", schema);

module.exports = { Reason };
