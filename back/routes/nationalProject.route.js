// Import required modules
const express = require("express");
const {
  createNationalProject,
  getNationalProjects,
  getNationalProjectById,
  updateNationalProject,
  deleteNationalProject,
} = require("../controllers/nationalProject.controller");

// Initialize the router
const router = express.Router();

// Define the route to create a new national project
router.post("/", createNationalProject);

// Define the route to get all national projects
router.get("/", getNationalProjects);

// Define the route to get a specific national project by ID
router.get("/:id", getNationalProjectById);

// Define the route to update a national project by ID
router.put("/:id", updateNationalProject);

// Define the route to delete a national project by ID
router.delete("/:id", deleteNationalProject);

module.exports = router;
