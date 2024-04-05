var express = require("express");
var router = express.Router();
const {
  searchStationsController,
} = require("../controllers/searchStation.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET searchStations listing. */
router.get("/searchStations", searchStationsController.getSearchStations);
router.post(
  "/searchStations",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStationsController.addSearchStation
);
router.delete(
  "/searchStations/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStationsController.deleteSearchStation
);
router.put(
  "/searchStations/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStationsController.updateSearchStation
);

module.exports = router;
