const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  group_id: {type: Number, required: true},
  stuff_id: {type: Number, required: true}
});

const GroupStaff = model("group_staff", schema);

module.exports = { GroupStaff };
