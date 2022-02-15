// Connect to DB models here???

var async = require("async");

// exports.index = function (req, res) {
//   res.send("NOT IMPLEMENTED: News list");
// };

exports.news_list = function (req, res) {
  res.send("NOT IMPLEMENTED: News list");
};

exports.news_detail = function (req, res) {
  res.send(`NOT IMPLEMENTED: News detail: ${req.params.id}`);
};

exports.news_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: News create GET");
};

exports.news_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: News create POST");
};

exports.news_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: News delete GET");
};

exports.news_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: News delete POST");
};

exports.news_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: News update GET");
};

exports.news_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: News update POST");
};
