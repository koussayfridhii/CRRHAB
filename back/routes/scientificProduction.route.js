const express = require("express");
const router = express.Router();
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
const scientificProductionController = require("../controllers/scientificProduction.controller");

// Route to create a new scientific production
router.post(
  "/scientific_productions",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  scientificProductionController.createScientificProduction
);

// Route to get all scientific productions
router.get(
  "/scientific_productions",
  scientificProductionController.getAllScientificProductions
);

// Route to get a specific scientific production by ID
router.get(
  "/scientific_productions/:id",
  scientificProductionController.getScientificProductionById
);

// Route to update a specific scientific production by ID
router.put(
  "/scientific_productions/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  scientificProductionController.updateScientificProductionById
);

// Route to delete a specific scientific production by ID
router.delete(
  "/scientific_productions/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  scientificProductionController.deleteScientificProductionById
);

module.exports = router;
