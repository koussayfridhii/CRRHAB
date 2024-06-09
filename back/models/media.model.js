const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    img: {
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
    color: {
      type: String,
      required: true,
      default: "#0FA239",
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
  },
  { timestamps: true }
);
module.exports.mediaModel = mongoose.model("media", mediaSchema);
