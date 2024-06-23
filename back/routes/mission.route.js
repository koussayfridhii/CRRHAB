var express = require("express");
var router = express.Router();
const {
  getAllMissions,
  getMissionById,
  createMission,
  updateMission,
  deleteMission,
} = require("../controllers/mission.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

// Route pour obtenir toutes les missions
router.get("/missions", getAllMissions);

// Route pour obtenir une mission par ID
router.get("/missions/:id", getMissionById);

// Route pour créer une nouvelle mission
router.post(
  "/missions",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  createMission
);

// Route pour mettre à jour une mission par ID
router.put(
  "/missions/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  updateMission
);

// Route pour supprimer une mission par ID
router.delete(
  "/missions/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  deleteMission
);

module.exports = router;
