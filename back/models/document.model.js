const mongoose = require("mongoose");

const documentSchema = mongoose.Schema(
  {
    title: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    type: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports.documentModel = mongoose.model("documents", documentSchema);
