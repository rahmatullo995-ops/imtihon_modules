const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  lesson_id: {type: Number, required: true},
  student_id: {type: Number, required: true},
  is_there: {type: Boolean, required: true},
  reason: {type: String, required: true, trim: true},
  has_paid: {type: Boolean, required: true}
});

const StudentLesson = model("student_lesson", schema);

module.exports = { StudentLesson };
