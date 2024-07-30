const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const { app, server } = require("./socket/socket");

// Routes
const routes = {
  pages: require("./routes/pages.route"),
  user: require("./routes/user.route"),
  form: require("./routes/form.route"),
  media: require("./routes/media.route"),
  news: require("./routes/news.route"),
  events: require("./routes/event.route"),
  searchStations: require("./routes/searchStation.route"),
  searchStructures: require("./routes/searchStructure.route"),
  partners: require("./routes/partners.route"),
  documents: require("./routes/document.route"),
  links: require("./routes/link.route"),
  faqs: require("./routes/faq.route"),
  contactUs: require("./routes/contactUs.route"),
  surveys: require("./routes/survey.route"),
  messages: require("./routes/message.route"),
  searchAll: require("./routes/search.route"),
  scientificCouncilMembers: require("./routes/scientificCounciMembers.route"),
  stats: require("./routes/stats.route"),
  researchTeam: require("./routes/researchTeam.route"),
  diplomaCourse: require("./routes/diplomaCourse.route"),
  scientificProduction: require("./routes/scientificProduction.route"),
  laboratoryMembers: require("./routes/laboratoryMembers.route"),
  nationalProject: require("./routes/nationalProject.route"),
  video: require("./routes/video.route"),
  paragraphLandingPage: require("./routes/paragraphLanding.route"),
  history: require("./routes/history.route"),
  mission: require("./routes/mission.route"),
  openData: require("./routes/openData.route"),
  search: require("./routes/search.route")
};

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

const allowedOrigins = [
  "https://crrhab.agrinet.tn",
  "https://crrhab.vercel.app",
  "http://193.95.21.154",
  "http://localhost:3000/"
];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// }));
app.use(cors({origin:"*"}))
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  next();
});

require("./middlewares/passport")(passport);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Routes usage
app.use("/api", [
  routes.pages,
  routes.user,
  routes.form,
  routes.media,
  routes.news,
  routes.events,
  routes.searchStations,
  routes.searchStructures,
  routes.partners,
  routes.documents,
  routes.links,
  routes.contactUs,
  routes.faqs,
  routes.surveys,
  routes.messages,
  routes.searchAll,
  routes.scientificCouncilMembers,
  routes.stats,
  routes.researchTeam,
  routes.diplomaCourse,
  routes.scientificProduction,
  routes.laboratoryMembers,
  routes.nationalProject,
  routes.video,
  routes.paragraphLandingPage,
  routes.history,
  routes.mission,
  routes.openData,
  routes.search
]);

app.get("/", (req, res) => {
  res.json("Welcome to the API");
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
