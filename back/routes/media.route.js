var express = require("express");
var router = express.Router();
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
const { mediaControllers } = require("../controllers/media.controller");

router.post(
  "/media",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  mediaControllers.postMedia
);
router.get("/media", mediaControllers.getMedia);
router.put(
  "/media/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  mediaControllers.putMedia
);
router.delete(
  "/media/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  mediaControllers.deleteMedia
);

module.exports = router;
