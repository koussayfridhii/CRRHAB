const { researcherModel } = require("../models/researchTeam.model");

// Create a new researcher
exports.createResearcher = async (req, res) => {
  try {
    const researcher = await researcherModel.create(req.body);
    return res.status(201).json(researcher);
  } catch (error) {
    console.error("Error creating researcher:", error);
    return res.status(500).json({ error: "Could not create researcher" });
  }
};

// Get all researchers
exports.getAllResearchers = async (req, res) => {
  try {
    const researchers = await researcherModel.find();
    return res.status(200).json(researchers);
  } catch (error) {
    console.error("Error fetching researchers:", error);
    return res.status(500).json({ error: "Could not fetch researchers" });
  }
};

// Get researcher by ID
exports.getResearcherById = async (req, res) => {
  try {
    const researcher = await researcherModel.findOne({ orcid: req.params.id });
    if (!researcher) {
      return res.status(404).json({ error: "Researcher not found" });
    }
    return res.status(200).json(researcher);
  } catch (error) {
    console.error("Error fetching researcher:", error);
    return res.status(500).json({ error: "Could not fetch researcher" });
  }
};

// Update researcher by ID
exports.updateResearcherById = async (req, res) => {
  try {
    const researcher = await researcherModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!researcher) {
      return res.status(404).json({ error: "Researcher not found" });
    }
    return res.status(200).json(researcher);
  } catch (error) {
    console.error("Error updating researcher:", error);
    return res.status(500).json({ error: "Could not update researcher" });
  }
};

// Delete researcher by ID
exports.deleteResearcherById = async (req, res) => {
  try {
    const researcher = await researcherModel.findOneAndDelete({
      orcid: req.params.orcid,
    });
    if (!researcher) {
      return res.status(404).json({ error: "Researcher not found" });
    }
    return res.status(204).end();
  } catch (error) {
    console.error("Error deleting researcher:", error);
    return res.status(500).json({ error: "Could not delete researcher" });
  }
};
