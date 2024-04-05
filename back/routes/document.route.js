var express = require("express");
var router = express.Router();
const { documentControllers } = require("../controllers/document.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/documents", documentControllers.getDocument);

router.post(
  "/documents",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  documentControllers.postDocument
);
router.delete(
  "/documents/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  documentControllers.deleteDocument
);
router.put(
  "/documents/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  documentControllers.putDocument
);

module.exports = router;
