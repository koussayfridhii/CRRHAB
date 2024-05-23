const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  questionText: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  questionType: {
    type: String,
    enum: ["multipleChoice", "openEnded"],
    required: true,
  },
  answerText: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
});

module.exports.surveyQuestionModel = mongoose.model("question", questionSchema);
