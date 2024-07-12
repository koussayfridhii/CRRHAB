var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const { app, server } = require("./socket/socket");
//routes
const pagesRouter = require("./routes/pages.route");
const userRouter = require("./routes/user.route");
const formRouter = require("./routes/form.route");
const mediaRouter = require("./routes/media.route");
const newsRouter = require("./routes/news.route");
const eventsRouter = require("./routes/event.route");
const searchStationsRouter = require("./routes/searchStation.route");
const searchStructuresRouter = require("./routes/searchStructure.route");
const partnersRouter = require("./routes/partners.route");
const documentsRouter = require("./routes/document.route");
const linksRouter = require("./routes/link.route");
const faqsRouter = require("./routes/faq.route");
const contactUsRouter = require("./routes/contactUs.route");
const surveysRouter = require("./routes/survey.route");
const messagesRouter = require("./routes/message.route");
const searchAllRouter = require("./routes/search.route");
const ScientificCouncilMembersRouter = require("./routes/scientificCounciMembers.route");
const statsRouter = require("./routes/stats.route");
const researchTeamRouter = require("./routes/researchTeam.route");
const diplomaCourseRouter = require("./routes/diplomaCourse.route");
const scientificProductionRouter = require("./routes/scientificProduction.route");
const laboratoryMembersRouter = require("./routes/laboratoryMembers.route");
const nationalProjectRouter = require("./routes/nationalProject.route");
const videoRouter = require("./routes/video.route");
const paragraphLandingPageRoute = require("./routes/paragraphLanding.route");
const historyRoute = require("./routes/history.route");
const missionRoute = require("./routes/mission.route");
const openDataRoute = require("./routes/openData.route");

//initializing app(express)
// var app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
// Configuration de CORS pour accepter les requêtes de n'importe quelle source
app.use(cors({ origin: "*" }));

require("./middlewares/passport")(passport);

//db Connection

//routes usage

server.listen(process.env.Port, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
// module.exports = app;
app.use("/api", [
  pagesRouter,
  userRouter,
  formRouter,
  mediaRouter,
  newsRouter,
  eventsRouter,
  searchStationsRouter,
  searchStructuresRouter,
  partnersRouter,
  documentsRouter,
  linksRouter,
  contactUsRouter,
  faqsRouter,
  surveysRouter,
  messagesRouter,
  searchAllRouter,
  ScientificCouncilMembersRouter,
  statsRouter,
  researchTeamRouter,
  diplomaCourseRouter,
  scientificProductionRouter,
  laboratoryMembersRouter,
  nationalProjectRouter,
  videoRouter,
  paragraphLandingPageRoute,
  historyRoute,
  missionRoute,
  openDataRoute
]);
app.get("/", (req, res) => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      res.json("DB Connected");
    })
    .catch((err) => {
      res.json(err);
    });
});
