const mongoose = require("mongoose");

// Function to search all collections for a specific query
async function searchAllCollections(query) {
  console.log(query);
  const collections = await mongoose.connection.db.collections();
  const searchResults = {};

  for (let collection of collections) {
    const collectionName = collection.collectionName;
    const Model = mongoose.model(
      collectionName,
      new mongoose.Schema({}, { strict: false })
    );
    const results = await Model.find(query).exec();
    searchResults[collectionName] = results;
  }

  return searchResults;
}

// Route to handle search requests

module.exports.searchAllCollectionsControllers = { searchAllCollections };
