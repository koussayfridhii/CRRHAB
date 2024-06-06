const express = require("express");
const router = express.Router();
const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
} = require("../controllers/laboratoryMembers.controller");

// Get all laboratory members
router.get("/laboratory_members", getAllMembers);

// Create a new laboratory member
router.post("/laboratory_members", createMember);

// Get a laboratory member by ID
router.get("/laboratory_members/:id", getMemberById);

// Update a laboratory member by ID
router.put("/laboratory_members/:id", updateMemberById);

// Delete a laboratory member by ID
router.delete("/laboratory_members/:id", deleteMemberById);

module.exports = router;
