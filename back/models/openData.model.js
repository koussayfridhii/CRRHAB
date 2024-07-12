const mongoose = require('mongoose');

// Define a schema for the open data
const OpenDataSchema = new mongoose.Schema({
    type: { type: String, required: true },
    title: {
        fr: { type: String, required: true },
        en: { type: String, required: true },
        ar: { type: String, required: true },
    },
    link: { type: String, required: true }
});

// Create a model from the schema
const OpenData = mongoose.model('OpenData', OpenDataSchema);

// Export the model
module.exports = OpenData;
