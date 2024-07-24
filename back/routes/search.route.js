// Import necessary modules
const express = require('express');
const router = express.Router();

// Import search controller
const { searchAllCollections } = require('../controllers/search.controller');

// Define route for searching all collections
router.post('/search', searchAllCollections);

module.exports = router;
