const mongoose = require("mongoose");

const nationalProjectSchema = new mongoose.Schema({
  title: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  cordinator: {
    type: Object,
    required: true,
    properties: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
  },
  duration: {
    type: String,
    required: true,
  },
  closed:{
    type: Boolean,
    default: false,
  }
});

// Create a text index on the fields you want to search
nationalProjectSchema.index({
  'title.fr': 'text',
  'title.ar': 'text',
  'title.en': 'text',
  'cordinator.fr': 'text',
  'cordinator.ar': 'text',
  'cordinator.en': 'text',
  'duration': 'text',
});


module.exports.nationalProjectModel = mongoose.model(
  "nationalProject",
  nationalProjectSchema
);
