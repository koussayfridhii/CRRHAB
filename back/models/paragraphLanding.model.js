const mongoose = require("mongoose");

const paragraphLandingSchema = new mongoose.Schema(
  {
    fr: { type: String },
    ar: { type: String },
    en: { type: String },
    directeur: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
      img: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);
module.exports.paragraphLandingModel = mongoose.model(
  "paragraphLanding",
  paragraphLandingSchema
);
