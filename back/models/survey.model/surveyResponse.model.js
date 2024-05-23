const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  respondentIp: String, // Optional for anonymous surveys
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  answerData: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      answer: {
        // Handle both predefined answer (ObjectId) and open ended answer (text)
        type: Object,
        required: true,
        properties: {
          fr: { type: String },
          ar: { type: String },
          en: { type: String },
        },
      },
      answerText: {
        type: Object,
        required: true,
        properties: {
          fr: { type: String },
          ar: { type: String },
          en: { type: String },
        },
      }, // Optional for open ended answers
    },
  ],
});

module.exports.surveyResponseModel = mongoose.model("response", responseSchema);
