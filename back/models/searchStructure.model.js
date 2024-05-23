const mongoose = require("mongoose");
//TODO: verify the model content
const searchStructureSchema = mongoose.Schema({
  name: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  //program or structure
  type: {
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

module.exports.searchStructureModel = mongoose.model(
  "searchStructures",
  searchStructureSchema
);
