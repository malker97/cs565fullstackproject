var About = require("../models/about");
var async = require("async");

exports.about_list = function (req, res, next) {
  About.find({}).exec(function (err, list_about) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.render("about_list", { title: "About List", about_list: list_about });
  });
};

// exports.index = function (req, res) {
//   res.send("NOT IMPLEMENTED: About Page");
// };

// exports.about = function (req, res, next) {
//   res.send("NOT IMPLEMENTED: About Page");
// };
