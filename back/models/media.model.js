const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  title: {
    // Object containing fields for different languages
    fr: {
      type: String,
      required: true,
    },
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  description: {
    // Object containing fields for different languages
    fr: {
      type: String,
    },
    ar: {
      type: String,
    },
    en: {
      type: String,
    },
  },
});
module.exports.mediaModel = mongoose.model("media", mediaSchema);
