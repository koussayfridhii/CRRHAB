const express = require("express");
const router = express.Router();
const {
  createResearcher,
  getAllResearchers,
  getResearcherById,
  updateResearcherById,
  deleteResearcherById,
} = require("../controllers/researchTeam.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
// Routes
router.post(
  "/research_team",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  createResearcher
);
router.get("/research_team", getAllResearchers);
router.get("/research_team/:id", getResearcherById);
router.put(
  "/research_team/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  updateResearcherById
);
router.delete(
  "/research_team/:orcid",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  deleteResearcherById
);

module.exports = router;
