const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  name: {type: String, required: true, trim: true}
});

const Role = model("role", schema);

module.exports = { Role };
