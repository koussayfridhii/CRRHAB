const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: false,
    },
    title: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    description: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    type:{
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a text index on the fields you want to search
newsSchema.index({
  'title.fr': 'text',
  'title.ar': 'text',
  'title.en': 'text',
  'description.fr': 'text',
  'description.ar': 'text',
  'description.en': 'text',
});



module.exports.newsModel = mongoose.model("news", newsSchema);
