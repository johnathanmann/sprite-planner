const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
