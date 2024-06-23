const mongoose = require("mongoose");

const missionSchema = mongoose.Schema({
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

module.exports.missionModel = mongoose.model("mission", missionSchema);
