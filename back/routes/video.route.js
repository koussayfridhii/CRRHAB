var express = require("express");
var router = express.Router();
const { videoControllers } = require("../controllers/video.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

/* Obtenir la liste des vidéos */
router.get("/videos", videoControllers.getVideos);

/* Ajouter une nouvelle vidéo */
router.post(
  "/videos",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  videoControllers.postVideo
);

/* Supprimer une vidéo par ID */
router.delete(
  "/videos/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  videoControllers.deleteVideo
);

/* Mettre à jour une vidéo par ID */
router.put(
  "/videos/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  videoControllers.putVideo
);

/* Obtenir une vidéo par ID */
router.get(
  "/videos/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  videoControllers.getVideoById
);

module.exports = router;
