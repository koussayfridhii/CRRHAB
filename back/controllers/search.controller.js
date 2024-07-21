// Import necessary modules
const mongoose = require('mongoose');

// Define search function
const searchAllCollections = async (req, res) => {
    try {
        // Get all collections in the database
        const collections = await mongoose.connection.db.listCollections().toArray();

        // Initialize an empty array to store search results
        const results = [];

        // Loop through each collection and search for the query
        for (const collection of collections) {
            const col = mongoose.connection.db.collection(collection.name);
            const data = await col.find(req.query).toArray();
            if (data.length > 0) {
                results.push({ collection: collection.name, data });
            }
        }

        // Send the search results as the response
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { searchAllCollections };
