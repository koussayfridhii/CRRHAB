var express = require("express");
var router = express.Router();
const { faqControllers } = require("../controllers/faq.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");
/* GET users listing. */
router.get("/faqs", faqControllers.getFaq);

router.post(
  "/faqs",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  faqControllers.postFaq
);
router.delete(
  "/faqs/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  faqControllers.deleteFaq
);
router.put(
  "/faqs/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  faqControllers.putFaq
);

module.exports = router;
