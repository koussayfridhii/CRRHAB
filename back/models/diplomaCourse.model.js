const mongoose = require("mongoose");

const diplomaCourseSchema = mongoose.Schema(
  {
    annee: { type: Number, required: true },
    type: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    auteur: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    titre: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    specialite: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    directeur: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    etablissement: {
      ar: { type: String, required: true },
      fr: { type: String, required: true },
      en: { type: String, required: true },
    },
    date: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports.DiplomaCourse = mongoose.model(
  "diplomaCourse",
  diplomaCourseSchema
);
