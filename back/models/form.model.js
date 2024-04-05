const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: String,
    required: true,
    default: "test",
  },
});
module.exports.formModel = mongoose.model("form", inputSchema);
