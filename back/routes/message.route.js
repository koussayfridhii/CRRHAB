const express = require("express");
const passport = require("passport");
const { messageControllers } = require("../controllers/message.controller");

var router = express.Router();

router.get(
  "/messages/:id",
  passport.authenticate("jwt", { session: false }),
  messageControllers.getMessages
);
router.post(
  "/messages/send/:id",
  passport.authenticate("jwt", { session: false }),
  messageControllers.sendMessage
);

module.exports = router;
