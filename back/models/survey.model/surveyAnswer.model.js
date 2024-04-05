const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  answerText: {
    type: String,
    required: true,
  },
});

module.exports.surveyAnswerModel = mongoose.model("answer", answerSchema);
