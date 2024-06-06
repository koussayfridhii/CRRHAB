const {
  ScientificProduction,
} = require("../models/scientificProduction.model");

// Create a new scientific production entry
exports.createScientificProduction = async (req, res) => {
  try {
    const newProduction = new ScientificProduction(req.body);
    await newProduction.save();
    res.status(201).json(newProduction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all scientific production entries
exports.getAllScientificProductions = async (req, res) => {
  try {
    const productions = await ScientificProduction.find();
    res.status(200).json(productions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single scientific production entry by ID
exports.getScientificProductionById = async (req, res) => {
  try {
    const production = await ScientificProduction.findById(req.params.id);
    if (!production) {
      return res
        .status(404)
        .json({ message: "Scientific production not found" });
    }
    res.status(200).json(production);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a scientific production entry by ID
exports.updateScientificProductionById = async (req, res) => {
  try {
    const updatedProduction = await ScientificProduction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduction) {
      return res
        .status(404)
        .json({ message: "Scientific production not found" });
    }
    res.status(200).json(updatedProduction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a scientific production entry by ID
exports.deleteScientificProductionById = async (req, res) => {
  try {
    const deletedProduction = await ScientificProduction.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProduction) {
      return res
        .status(404)
        .json({ message: "Scientific production not found" });
    }
    res.status(200).json({ message: "Scientific production deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
