const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  name: {type: String, required: true, trim: true}
});

const Stage = model("stage", schema);

module.exports = { Stage };
