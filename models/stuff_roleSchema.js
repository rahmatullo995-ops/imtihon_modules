const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  stuff_id: {type: Number, required: true},
  role_id: {type: Number, required: true}
});

const StuffRole = model("stuff_role", schema);

module.exports = { StuffRole };
