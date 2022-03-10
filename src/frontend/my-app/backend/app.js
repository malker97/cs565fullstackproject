const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const aboutRouter = require("./api/about");
const usersRouter = require("./api/users");
const tasksRouter = require("./api/tasks");
const newsRouter = require("./api/news");

const app = express();

app.use(cors());

app.set("view engine", "jade");

// Add middleware:
app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static("https://deploytest-343305.wl.r.appspot.com/index.html"));
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/about", aboutRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/news", newsRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
// app.use((req, res, next) => {
//   res.sendFile("https://deploytest-343305.wl.r.appspot.com/index.html");
// });

//Set up mongoose connection
const mongoose = require("mongoose");

// MONGOOSE DEBUGGER:
//mongoose.set("debug", true);

const mongoDB = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.wcoet.mongodb.net/todo?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
