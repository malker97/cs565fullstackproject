const News = require("../models/news");

// ### THIS CODE IS NOT USED ###

// GET /api/news
exports.news_list = (req, res) => {
  News.find({}).exec((err, list_news, next) => {
    if (err) {
      return next(err);
    }
    //Successful, return data:
    res.json(list_news);
  });
};

exports.news_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: News detail: ${req.params.id}`);
};

exports.news_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: News create GET");
};

exports.news_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: News create POST");
};

exports.news_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: News delete GET");
};

exports.news_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: News delete POST");
};

exports.news_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: News update GET");
};

exports.news_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: News update POST");
};
