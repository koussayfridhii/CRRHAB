const mongoose = require("mongoose");

const researcherSchema = mongoose.Schema(
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
    cv: {
      type: String,
    },
    speciality: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
  },
  { timestamps: true }
);
researcherSchema.index({
  'name.ar': 'text',
  'name.fr': 'text',
  'name.en': 'text',
  email: 'text',
  orcid: 'text',
  cv: 'text',
  'speciality.ar': 'text',
  'speciality.fr': 'text',
  'speciality.en': 'text'
});


module.exports.researcherModel = mongoose.model(
  "researcherTeam",
  researcherSchema
);
