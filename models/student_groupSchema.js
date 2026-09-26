const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  student_id: {type: Number, required: true},
  group_id: {type: Number, required: true}
});

const StudentGroup = model("student_group", schema);

module.exports = { StudentGroup };
