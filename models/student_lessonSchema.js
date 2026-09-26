const { Schema, model } = require("mongoose");
const { Lesson } = require("./lessonSchema");
const { Student } = require("./studentsSchema");

const schema = new Schema({
    id: { type: Number, required: true },

    lesson_id: {
        type: Schema.Types.ObjectId,
        ref: Lesson,
        required: true
    },

    student_id: {
        type: Schema.Types.ObjectId,
        ref: Student,
        required: true
    },

    is_there: { type: Boolean, required: true },
    reason: { type: String, required: true, trim: true },
    has_paid: { type: Boolean, required: true }
});

const StudentLesson = model("student_lesson", schema);

module.exports = { StudentLesson };