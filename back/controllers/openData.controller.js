const OpenData = require('../models/openData.model');

// Create a new open data entry
exports.createOpenData = async (req, res) => {
    try {
        const newData = new OpenData(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all open data entries
exports.getAllOpenData = async (req, res) => {
    try {
        const data = await OpenData.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific open data entry by ID
exports.getOpenDataById = async (req, res) => {
    try {
        const data = await OpenData.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Open Data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific open data entry by ID
exports.updateOpenDataById = async (req, res) => {
    try {
        const updatedData = await OpenData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: 'Open Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific open data entry by ID
exports.deleteOpenDataById = async (req, res) => {
    try {
        const deletedData = await OpenData.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ message: 'Open Data not found' });
        }
        res.status(200).json({ message: 'Open Data deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
