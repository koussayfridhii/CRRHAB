var express = require("express");
var router = express.Router();
const {
  searchStructuresController,
} = require("../controllers/searchStructure.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET searchStructures listing. */
router.get("/searchStructures", searchStructuresController.getSearchStructures);
router.post(
  "/searchStructures",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStructuresController.addSearchStructure
);
router.delete(
  "/searchStructures/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStructuresController.deleteSearchStructure
);
router.put(
  "/searchStructures/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  searchStructuresController.updateSearchStructure
);

module.exports = router;
