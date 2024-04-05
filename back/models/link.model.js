const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports.linkModel = mongoose.model("Links", linkSchema);
