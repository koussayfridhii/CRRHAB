var express = require("express");
var router = express.Router();
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
const { formControllers } = require("../controllers/form.controller");

router.post(
  "/users/signup/form",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  formControllers.postForm
);
router.get(
  "/users/signup/form",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  formControllers.getForm
);
router.put(
  "/users/signup/form/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  formControllers.putForm
);
router.delete(
  "/users/signup/form/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  formControllers.deleteForm
);

module.exports = router;
