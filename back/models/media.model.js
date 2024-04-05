const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
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
module.exports.mediaModel = mongoose.model("media", mediaSchema);
