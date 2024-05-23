const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
  name: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  type: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports.documentModel = mongoose.model("documents", documentSchema);
