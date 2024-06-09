const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
    description: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
    img: {
      type: String,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports.eventModel = mongoose.model("video", videoSchema);
