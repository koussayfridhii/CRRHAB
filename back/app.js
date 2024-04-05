var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");

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
const surveyRouter = require("./routes/survey.route");

//initializing app(express)
var app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

//db Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//routes usage
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
  surveyRouter,
]);
module.exports = app;
