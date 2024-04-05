const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
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
    additional: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional2: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional3: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional4: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional5: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional6: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional7: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional8: {
      type: mongoose.Schema.Types.Mixed,
    },
    additional9: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

module.exports.userModel = mongoose.model("users", userSchema); // Export both schemas
