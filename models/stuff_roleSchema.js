const { Schema, model } = require("mongoose");
const { Staff } = require("./staffSchema");
const { Role } = require("./roleSchema");

const schema = new Schema({
    id: { type: Number, required: true },

    stuff_id: {
        type: Schema.Types.ObjectId,
        ref: Staff,
        required: true
    },

    role_id: {
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    }
});

const StuffRole = model("stuff_role", schema);

module.exports = { StuffRole };