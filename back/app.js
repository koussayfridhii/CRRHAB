const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
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
const searchRoute = require("./routes/search.route");

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
const allowedOrigins = ["http://crrhab.agrinet.tn","https://crrhab.agrinet.tn/","https://crrhab.vercel.app/" ,"http://193.95.21.154", "http://193.95.21.154"];
app.options('*', cors()); // Handle preflight requests for all routes

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  next();
});

require("./middlewares/passport")(passport);

// Database connection
mongoose
  .connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes usage
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
  openDataRoute,
  searchRoute
]);

app.get("/", (req, res) => {
  res.json("Welcome to the API");
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
