var Task = require("../models/task");
// TO test:
var Genre = require("../models/genre");

var async = require("async");

// exports.index = function (req, res) {
//   res.send("task");
// };

exports.task_list = function (req, res) {
  //Genre.find({})
  Task.find({}).exec(function (err, list_tasks) {
    if (err) {
      return next(err);
    }
    console.log(list_tasks);
    //Successful, so render
    res.render("task_list", { title: "Task List", task_list: list_tasks });
  });
};

exports.task_detail = function (req, res) {
  res.send(`NOT IMPLEMENTED: Task detail: ${req.params.id}`);
};

exports.task_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Task create GET");
};

exports.task_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Task create POST");
};

exports.task_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Task delete GET");
};

exports.task_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Task delete POST");
};

exports.task_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Task update GET");
};

exports.task_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Task update POST");
};
