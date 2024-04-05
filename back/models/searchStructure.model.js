const mongoose = require("mongoose");
//TODO: verify the model content
const searchStructureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //program or structure
  type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports.searchStructureModel = mongoose.model(
  "searchStructures",
  searchStructureSchema
);
