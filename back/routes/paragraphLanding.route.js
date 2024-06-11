var express = require("express");
var router = express.Router();
const {
  getAllParagraphs,
  getParagraphById,
  createParagraph,
  updateParagraph,
  deleteParagraph,
} = require("../controllers/paragraphLanding.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

// Route pour obtenir tous les paragraphes
router.get("/paragraphs", getAllParagraphs);

// Route pour obtenir un paragraphe par ID
router.get("/paragraphs/:id", getParagraphById);

// Route pour créer un nouveau paragraphe
router.post(
  "/paragraphs",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  createParagraph
);

// Route pour mettre à jour un paragraphe par ID
router.put(
  "/paragraphs/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  updateParagraph
);

// Route pour supprimer un paragraphe par ID
router.delete(
  "/paragraphs/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  deleteParagraph
);

module.exports = router;
