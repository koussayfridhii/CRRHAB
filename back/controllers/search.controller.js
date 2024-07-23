// Import necessary modules
const mongoose = require('mongoose');

// Define search function
const searchAllCollections = async (req, res) => {
  const query = req.query.q; // Get the search query from the request
  console.log(query);
  try {
    // Search all collections
    const results1 = await Collection1.find({ $text: { $search: query } });
    const results2 = await Collection2.find({ $text: { $search: query } });
    // Add search for all other collections...

    const results = [...results1, ...results2]; // Combine results from all collections

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { searchAllCollections };
