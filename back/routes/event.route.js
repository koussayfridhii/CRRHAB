var express = require("express");
var router = express.Router();
const { eventControllers } = require("../controllers/event.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/events", eventControllers.getEvent);

router.post(
  "/events",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  eventControllers.postEvent
);
router.delete(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  eventControllers.deleteEvent
);
router.put(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  eventControllers.putEvent
);

module.exports = router;
