const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    username: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    birthDate: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    profilePic: {
      type: String,
      default: "https://avatar.iran.liara.run/public/9",
    },
    news: {
      type: Boolean,
      required: true,
      default: false,
    },
    grade: {
      type: Object,
      required: false,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    socialMedia: {
      type: String,
      required: false,
    },
    description: {
      type: Object,
      required: false,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
    affiliation: {
      type: Object,
      required: true,
      properties: {
        fr: { type: String },
        ar: { type: String },
        en: { type: String },
      },
    },
  },
  { timestamps: true }
);

module.exports.userModel = mongoose.model("users", userSchema);
