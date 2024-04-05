const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
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
  media: {
    type: String,
  },
});
module.exports.newsModel = mongoose.model("news", newsSchema);
