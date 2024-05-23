const mongoose = require("mongoose");

const scientificCouncilSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    role: {
      type: Object,
      required: true,
      properties: {
        fr: String,
        en: String,
        ar: String,
      },
    },
    council: {
      type: Object,
      required: true,
      properties: {
        fr: String,
        en: String,
        ar: String,
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports.ScientificCouncilModel = mongoose.model(
  "ScientificCouncilMembers",
  scientificCouncilSchema
);
