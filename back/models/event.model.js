const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  description: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  link: {
    type: String,
    required: false,
  },
  media: {
    type: String,
    required: false,
  },
  type: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports.eventModel = mongoose.model("events", eventSchema);
