const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  title: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  description: {
    type: Object,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  closedAt: Date,
});

module.exports.surveyModel = mongoose.model("Survey", surveySchema);
