const { Schema, model } = require("mongoose");
const { Stage } = require("./stageSchema");
const { Branch } = require("./branchSchema");

const schema = new Schema({
    id: { type: Number, required: true },

    group_name: { type: String, required: true, trim: true },
    lesson_start_time: { type: String, required: true, trim: true },
    lesson_continuous: { type: String, required: true, trim: true },
    lesson_week_day: { type: String, required: true, trim: true },

    group_stage_id: {
        type: Schema.Types.ObjectId,
        ref: Stage,
        required: true
    },

    room_number: { type: String, required: true, trim: true },
    room_floor: { type: Number, required: true },

    branch_id: {
        type: Schema.Types.ObjectId,
        ref: Branch,
        required: true
    },

    lessons_quant: { type: Number, required: true },
    is_active: { type: Boolean, required: true }
});

const Group = model("group", schema);

module.exports = { Group };