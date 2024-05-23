const mongoose = require("mongoose");

const partnersSchema = mongoose.Schema({
  name: {
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
  image: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  international: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports.partnerModel = mongoose.model("partners", partnersSchema);
