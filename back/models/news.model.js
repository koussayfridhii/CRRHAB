const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  link: {
    type: String,
    required: false,
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
  img: {
    type: String,
    required: true,
  },
});
module.exports.newsModel = mongoose.model("news", newsSchema);
