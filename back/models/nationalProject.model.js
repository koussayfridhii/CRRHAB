const mongoose = require("mongoose");

const nationalProjectSchema = new mongoose.Schema({
  title: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  cordinator: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  duration: {
    type: String,
    required: true,
  },
  closed:{
    type: Boolean,
    default: false,
  }
});
module.exports.nationalProjectModel = mongoose.model(
  "nationalProject",
  nationalProjectSchema
);
