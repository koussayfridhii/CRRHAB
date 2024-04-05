const mongoose = require("mongoose");

const blocSchema = new mongoose.Schema({
  fr: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: true,
        default: "text",
      },
    },
  },
  ar: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: true,
        default: "text",
      },
    },
  },
  en: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: true,
        default: "text",
      },
    },
  },
});

const pagesSchema = new mongoose.Schema({
  fr: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  },
  ar: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  },
  en: {
    type: Object,
    required: true,
    properties: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  },
  path: {
    type: String,
    required: true,
  },
  blocs: {
    type: [blocSchema], // Array of blocSchema objects
    required: false,
  },
});

module.exports.pageModel = mongoose.model("pages", pagesSchema);
