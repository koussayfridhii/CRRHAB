// Import the national project model
const { nationalProjectModel } = require("../models/nationalProject.model");

// Controller to create a new national project
const createNationalProject = async (req, res) => {
  try {
    const newProject = new nationalProjectModel(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to get all national projects
const getNationalProjects = async (req, res) => {
  try {
    const projects = await nationalProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a specific national project by ID
const getNationalProjectById = async (req, res) => {
  try {
    const project = await nationalProjectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a national project by ID
const updateNationalProject = async (req, res) => {
  try {
    const project = await nationalProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to delete a national project by ID
const deleteNationalProject = async (req, res) => {
  try {
    const project = await nationalProjectModel.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNationalProject,
  getNationalProjects,
  getNationalProjectById,
  updateNationalProject,
  deleteNationalProject,
};
