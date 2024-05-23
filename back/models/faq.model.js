const mongoose = require("mongoose");

// Define the FAQ schema with multilingual support for question and answer
const faqSchema = mongoose.Schema({
  question: {
    ar: {
      type: String,
      required: true, // Arabic question is required
    },
    fr: {
      type: String,
      required: true, // French question is required
    },
    en: {
      type: String,
      required: true, // English question is required
    },
  },
  answer: {
    ar: {
      type: String,
      required: true, // Arabic answer is required
    },
    fr: {
      type: String,
      required: true, // French answer is required
    },
    en: {
      type: String,
      required: true, // English answer is required
    },
  },
  link: {
    type: String,
    required: false, // Link is optional
  },
});

// Export the FAQ model based on the schema
module.exports.faqModel = mongoose.model("faq", faqSchema);
