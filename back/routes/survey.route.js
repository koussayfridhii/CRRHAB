var express = require("express");
var router = express.Router();
const { surveyControllers } = require("../controllers/survey.controller");
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

/* GET users listing. */
router.get("/surveys", surveyControllers.getSurveys);
router.post(
  "/surveys",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.createSurvey
);
router.delete(
  "/surveys/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.deleteSurvey
);
router.get("/surveys/questions", surveyControllers.getSurveyQuestions);
router.post(
  "/surveys/questions",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.createSurveyQuestion
);
router.delete(
  "/surveys/questions/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.deleteSurvey
);
router.post(
  "surveys/response",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.createSurveyResponse
);
router.get(
  "/surveys/response",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.getSurveyResponses
);
//TODO: check who can access the response
router.get(
  "/surveys/response/:id",
  passport.authenticate("jwt", { session: false }),
  rolesMiddleware.inRole(rolesMiddleware.roles.admin),
  surveyControllers.getSurveyResponse
);
module.exports = router;
