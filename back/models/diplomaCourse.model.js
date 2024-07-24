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
diplomaCourseSchema.index({
  'type.ar': 'text',
  'type.fr': 'text',
  'type.en': 'text',
  'auteur.ar': 'text',
  'auteur.fr': 'text',
  'auteur.en': 'text',
  'titre.ar': 'text',
  'titre.fr': 'text',
  'titre.en': 'text',
  'specialite.ar': 'text',
  'specialite.fr': 'text',
  'specialite.en': 'text',
  'directeur.ar': 'text',
  'directeur.fr': 'text',
  'directeur.en': 'text',
  'etablissement.ar': 'text',
  'etablissement.fr': 'text',
  'etablissement.en': 'text',
});

module.exports.DiplomaCourse = mongoose.model(
  "diplomaCourse",
  diplomaCourseSchema
);
