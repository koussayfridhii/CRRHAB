const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ["multipleChoice", "openEnded"],
    required: true,
  },
  answerText: {
    type: String,
    required: true,
  },
});

module.exports.surveyQuestionModel = mongoose.model("question", questionSchema);
