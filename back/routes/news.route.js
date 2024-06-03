var express = require("express");
var router = express.Router();
const { newsControllers } = require("../controllers/news.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/news", newsControllers.getNews);
router.get("/news/:id", newsControllers.getNewsById);

router.post(
  "/news",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  newsControllers.postNews
);
router.delete(
  "/news/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  newsControllers.deleteNews
);
router.put(
  "/news/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  newsControllers.putNews
);

module.exports = router;
