const express = require("express");
const router = express.Router();
const {
  createMember,
  deleteMemberById,
  getAllMembers,
  getMemberById,
  updateMemberById,
} = require("../controllers/scientificCouncilMembers.controller");

router.post("/scientific_council", createMember);

router.get("/scientific_council", getAllMembers);

router.get("/scientific_council/:id", getMemberById);

router.put("/scientific_council/:id", updateMemberById);

router.delete("/scientific_council/:id", deleteMemberById);

module.exports = router;
