const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  closedAt: Date,
});

module.exports.surveyModel = mongoose.model("Survey", surveySchema);
