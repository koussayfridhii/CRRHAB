var express = require("express");
var router = express.Router();
const { userController } = require("../controllers/user.controller");

/* POST sign up a new user */
router.post("/users/signup", userController.signUp);

/* POST sign in an existing user */
router.post("/users/signin", userController.signIn);

/* GET users for sidebar, excluding the logged-in user */
router.get("/users/:id", userController.getUsersForSidebar);

/* POST restore a deactivated account */
router.post("/users/restore", userController.restoreAccount);

/* PUT update an existing user account */
router.put("/users/:id", userController.updateAccount);

/* DELETE deactivate an existing user account */
router.delete("/users/:id", userController.deactivateAccount);

/* POST forgot password to initiate password reset */
router.post("/users/forgot_password", userController.forgotPassword);

/* POST reset password using the token */
router.get("/reset/:token", userController.resetPassword);

module.exports = router;
