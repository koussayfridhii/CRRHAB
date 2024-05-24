const mongoose = require("mongoose");
//TODO: verify the model content
const statsSchema = mongoose.Schema({
  title: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  //program or structure
  value: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports.statsModel = mongoose.model("stats", statsSchema);
