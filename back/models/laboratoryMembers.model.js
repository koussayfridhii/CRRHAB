const mongoose = require("mongoose");

const laboratoryMemberSchema = mongoose.Schema(
  {
    name: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    email: {
      type: String,
      required: true,
    },
    orcid: {
      type: String,
    },
    grade: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    affiliation: {
      type: String,
    },
    executive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports.researcherModel = mongoose.model(
  "laboratoryMember",
  laboratoryMemberSchema
);
