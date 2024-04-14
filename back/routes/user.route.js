var express = require("express");
var router = express.Router();
const { userController } = require("../controllers/user.controller");
// const passport = require("passport");
// const { rolesMiddleware } = require("../middlewares/role");

/* GET users listing. */
router.post(
  "/users/signup",
  // passport.authenticate("jwt", { session: false }),
  // rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  userController.signUp
);
router.post("/users/signin", userController.signIn);
router.get("/users/:id", userController.getUsersForSidebar);

module.exports = router;
