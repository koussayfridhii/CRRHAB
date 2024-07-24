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

laboratoryMemberSchema.index({
  'name.ar': 'text',
  'name.fr': 'text',
  'name.en': 'text',
  email: 'text',
  orcid: 'text',
  'grade.ar': 'text',
  'grade.fr': 'text',
  'grade.en': 'text',
  affiliation: 'text'
});


module.exports.laboratoryMembersModel = mongoose.model(
  "laboratoryMember",
  laboratoryMemberSchema
);
