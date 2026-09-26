const { Schema, model } = require("mongoose");
const { Student } = require("./studentsSchema");
const { Group } = require("./groupSchema");

const schema = new Schema({
    id: { type: Number, required: true },

    student_id: {
        type: Schema.Types.ObjectId,
        ref: Student,
        required: true
    },

    group_id: {
        type: Schema.Types.ObjectId,
        ref: Group,
        required: true
    }
});

const StudentGroup = model("student_group", schema);

module.exports = { StudentGroup };