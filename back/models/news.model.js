const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
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
  media: {
    type: String,
  },
});
module.exports.newsModel = mongoose.model("news", newsSchema);
