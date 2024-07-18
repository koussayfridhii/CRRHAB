const mongoose = require("mongoose");

const scientificCouncilSchema = new mongoose.Schema(
  {
    president: {
      fr: String,
      en: String,
      ar: String,
    },
    rapporteur: {
      fr: String,
      en: String,
      ar: String,
    },
    Responsables_des_structures_RDI: [
      {
        fr: String,
        en: String,
        ar: String,
      },
    ],
    managersOfSpecializedUnits: [
      {
        fr: String,
        en: String,
        ar: String,
      },
    ],
    representativesOfResearchers: {
      fr: String,
      en: String,
      ar: String,
    },
    representativeOfIresa: {
      fr: String,
      en: String,
      ar: String,
    },
    representativesOfAgriculturalResearchAndHigherEducationEstablishments: {
      fr: String,
      en: String,
      ar: String,
    },
    representativeOfInrat:{
      fr: String,
      en: String,
      ar: String,  
    },
    representativeOfINRGREF:{
      fr: String,
      en: String,
      ar: String,  
    },
    representativeOfIO:{
      fr: String,
      en: String,
      ar: String,  
    },
    representativeOfCtab:{
      fr: String,
      en: String,
      ar: String,  
    },

  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports.ScientificCouncilMembersModel = mongoose.model(
  "ScientificCouncilMember",
  scientificCouncilSchema
);
