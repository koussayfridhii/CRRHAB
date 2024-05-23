const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Function to search all collections for a specific query
async function searchAllCollections(query) {
  // Get a list of all collections in the database
  const collections = await mongoose.connection.db.collections();
  const searchResults = {};

  // Iterate over each collection
  for (let collection of collections) {
    const collectionName = collection.collectionName;
    try {
      // Check if a model with the collection name already exists
      if (mongoose.connection.models[collectionName]) {
        // Delete the existing model to avoid OverwriteModelError
        delete mongoose.connection.models[collectionName];
      }
      // Define a dynamic model for each collection
      const Model = mongoose.model(
        collectionName,
        new mongoose.Schema({}, { strict: false })
      );
      // Find documents matching the query in the current collection
      const results = await Model.find(query).exec();
      // Store the search results for the current collection
      searchResults[collectionName] = results;
    } catch (error) {
      // Log any errors that occur during the search
      console.error(`Error searching in collection ${collectionName}:`, error);
    }
  }

  // Return the aggregated search results from all collections
  return searchResults;
}

// Route to handle search requests
router.get("/search", async (req, res) => {
  // Get the search term from query parameters
  const searchTerm = req.query.q;

  // Check if the search term is provided
  if (!searchTerm) {
    // Return a 400 status with an error message if search term is missing
    return res.status(400).json({ error: "Search term is required" });
  }

  try {
    // Create a query object to search in all string fields of the documents
    const query = { $text: { $search: searchTerm } };

    // Search all collections using the query
    const results = await searchAllCollections(query);
    // Return the search results as a JSON response
    res.json(results);
  } catch (error) {
    // Log any errors that occur during the search
    console.error(error);
    // Return a 500 status with an error message
    res
      .status(500)
      .json({ error: "An error occurred while searching the database" });
  }
});

module.exports = router;
