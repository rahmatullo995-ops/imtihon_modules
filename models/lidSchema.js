const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {type: Number, required: true},
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  phone_number: {type: String, required: true, trim: true},
  lid_stage_id: {type: Number, required: true},
  test_date: {type: Date, required: true},
  trial_lesson_date: {type: Number, required: true},
  trial_lesson_time: {type: String, required: true, trim: true},
  trial_lesson_group_id: {type: Number, required: true},
  lid_status_id: {type: Number, required: true},
  cancel_reason_id: {type: Number, required: true}
});

const Lid = model("lid", schema);

module.exports = { Lid };
