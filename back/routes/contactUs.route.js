var express = require("express");
const contactUsController = require("../controllers/contactUs.controller");
var router = express.Router();

router.post("/contactUs", contactUsController);

module.exports = router;
