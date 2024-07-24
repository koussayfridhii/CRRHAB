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
    representativesOfResearchers: [{
      fr: String,
      en: String,
      ar: String,
    }],
    representativeOfIresa: {
      fr: String,
      en: String,
      ar: String,
    },
    representativesOfAgriculturalResearchAndHigherEducationEstablishments: [{
      fr: String,
      en: String,
      ar: String,
    }],
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

scientificCouncilSchema.index({
  'president.fr': 'text',
  'president.en': 'text',
  'president.ar': 'text',
  'rapporteur.fr': 'text',
  'rapporteur.en': 'text',
  'rapporteur.ar': 'text',
  'Responsables_des_structures_RDI.fr': 'text',
  'Responsables_des_structures_RDI.en': 'text',
  'Responsables_des_structures_RDI.ar': 'text',
  'managersOfSpecializedUnits.fr': 'text',
  'managersOfSpecializedUnits.en': 'text',
  'managersOfSpecializedUnits.ar': 'text',
  'representativesOfResearchers.fr': 'text',
  'representativesOfResearchers.en': 'text',
  'representativesOfResearchers.ar': 'text',
  'representativeOfIresa.fr': 'text',
  'representativeOfIresa.en': 'text',
  'representativeOfIresa.ar': 'text',
  'representativesOfAgriculturalResearchAndHigherEducationEstablishments.fr': 'text',
  'representativesOfAgriculturalResearchAndHigherEducationEstablishments.en': 'text',
  'representativesOfAgriculturalResearchAndHigherEducationEstablishments.ar': 'text',
  'representativeOfInrat.fr': 'text',
  'representativeOfInrat.en': 'text',
  'representativeOfInrat.ar': 'text',
  'representativeOfINRGREF.fr': 'text',
  'representativeOfINRGREF.en': 'text',
  'representativeOfINRGREF.ar': 'text',
  'representativeOfIO.fr': 'text',
  'representativeOfIO.en': 'text',
  'representativeOfIO.ar': 'text',
  'representativeOfCtab.fr': 'text',
  'representativeOfCtab.en': 'text',
  'representativeOfCtab.ar': 'text',
});


module.exports.ScientificCouncilMembersModel = mongoose.model(
  "ScientificCouncilMember",
  scientificCouncilSchema
);
