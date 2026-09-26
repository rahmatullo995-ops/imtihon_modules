const { Schema, model } = require("mongoose");
const { Group } = require("./groupSchema");
const { Staff } = require("./staffSchema");

const schema = new Schema({
    id: { type: Number, required: true },

    group_id: {
        type: Schema.Types.ObjectId,
        ref: Group,
        required: true
    },

    stuff_id: {
        type: Schema.Types.ObjectId,
        ref: Staff,
        required: true
    }
});

const GroupStaff = model("group_staff", schema);

module.exports = { GroupStaff };