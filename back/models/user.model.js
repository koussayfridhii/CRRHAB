const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
  news: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
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
});

module.exports.userModel = mongoose.model("users", userSchema); // Export both schemas
