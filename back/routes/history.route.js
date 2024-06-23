var express = require("express");
var router = express.Router();
const {
  getAllHistories,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
} = require("../controllers/history.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

// Route pour obtenir toutes les entrées d'historique
router.get("/histories", getAllHistories);

// Route pour obtenir une entrée d'historique par ID
router.get("/histories/:id", getHistoryById);

// Route pour créer une nouvelle entrée d'historique
router.post(
  "/histories",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  createHistory
);

// Route pour mettre à jour une entrée d'historique par ID
router.put(
  "/histories/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  updateHistory
);

// Route pour supprimer une entrée d'historique par ID
router.delete(
  "/histories/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  deleteHistory
);

module.exports = router;
