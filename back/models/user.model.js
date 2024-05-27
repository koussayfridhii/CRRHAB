const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    username: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
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
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    socialMedia: {
      type: String,
    },
    description: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    affiliation: {
      ar: { type: String },
      fr: { type: String },
      en: { type: String },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports.userModel = mongoose.model("users", userSchema);
