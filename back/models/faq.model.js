const mongoose = require("mongoose");

const faqSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

module.exports.faqModel = mongoose.model("faq", faqSchema);
