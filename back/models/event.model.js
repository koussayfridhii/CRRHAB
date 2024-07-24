const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
    description: {
      fr: { type: String },
      ar: { type: String },
      en: { type: String },
    },
    link: {
      type: String,
      required: false,
    },
    media: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);


// Create a text index on the fields you want to search
eventSchema.index({
  'title.fr': 'text',
  'title.ar': 'text',
  'title.en': 'text',
  'description.fr': 'text',
  'description.ar': 'text',
  'description.en': 'text',
});

module.exports.eventModel = mongoose.model("events", eventSchema);
