const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  description: {
    fr: {
      type: String,
      required: true,
    },
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
});

module.exports.historyModel = mongoose.model("history", historySchema);
