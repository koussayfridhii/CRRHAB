var express = require("express");
var router = express.Router();
const { partnerControllers } = require("../controllers/partners.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/partners", partnerControllers.getPartner);

router.post(
  "/partners",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  partnerControllers.postPartner
);
router.delete(
  "/partners/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  partnerControllers.deletePartner
);
router.put(
  "/partners/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  partnerControllers.putPartner
);

module.exports = router;
