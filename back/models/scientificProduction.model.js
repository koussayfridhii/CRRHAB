const mongoose = require("mongoose");

// Schema definition for Scientific Production
const scientificProductionSchema = mongoose.Schema(
  {
    year: { type: Number, required: false },
    title: {
      ar: { type: String, required: false },
      fr: { type: String, required: false },
      en: { type: String, required: false },
    },
    authors: {
      ar: [{ type: String, required: false }],
      fr: [{ type: String, required: false }],
      en: [{ type: String, required: false }],
    },
    journal: {
      name: {
        ar: { type: String, required: false },
        fr: { type: String, required: false },
        en: { type: String, required: false },
      },
      volume: { type: Number },
      issue: { type: Number },
      pages: { type: String },
      ISSN: {
        electronic: { type: String },
        print: { type: String },
      },
      url: { type: String },
    },
    published_date: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    pdf_url: { type: String },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

module.exports.ScientificProduction = mongoose.model(
  "scientificProduction",
  scientificProductionSchema
);
