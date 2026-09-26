const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  lesson_theme: {type: String, required: true, trim: true},
  lesson_number: {type: Number, required: true},
  group_id: {type: Number, required: true},
  lesson_date: {type: Date, required: true}
});

const Lesson = model("lesson", schema);

module.exports = { Lesson };
