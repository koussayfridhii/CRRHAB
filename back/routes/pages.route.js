var express = require("express");
var router = express.Router();
const { pagesController } = require("../controllers/pages.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/pages", (req, res) => {
  res.json("hello pages");
});
router.post(
  "/pages",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  pagesController.addPage
);
router.delete(
  "/pages/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  pagesController.deletePage
);
router.put(
  "/pages/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  pagesController.updatePage
);

module.exports = router;
