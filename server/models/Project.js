const { Schema, model, Types } = require("mongoose");

const projectSchema = new Schema ({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description :{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = model("Project", projectSchema);

module.exports = Project;

