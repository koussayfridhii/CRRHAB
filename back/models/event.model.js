const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
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
    type: String,
    required: true,
    default: "text",
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports.eventModel = mongoose.model("events", eventSchema);
