var express = require("express");
var router = express.Router();
const { linkControllers } = require("../controllers/link.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/links", linkControllers.getLink);

router.post(
  "/links",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  linkControllers.postLink
);
router.delete(
  "/links/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  linkControllers.deleteLink
);
router.put(
  "/links/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  linkControllers.putLink
);

module.exports = router;
