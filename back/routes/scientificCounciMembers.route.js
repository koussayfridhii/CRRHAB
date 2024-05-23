const express = require("express");
const router = express.Router();
const {
  ScientificCouncilMembersController,
} = require("../controllers/scientificCouncilMembers.controller");

router.post(
  "/scientificCouncil/add_member",
  ScientificCouncilMembersController.addMember
);
router.delete(
  "/scientificCouncil/delete_member/:id",
  ScientificCouncilMembersController.deleteMember
);
router.get(
  "/scientificCouncil/all_members",
  ScientificCouncilMembersController.getAll
);

module.exports = router;
