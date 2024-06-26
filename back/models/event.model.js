const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
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
    link: {
      type: String,
      required: false,
    },
    media: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports.eventModel = mongoose.model("events", eventSchema);
