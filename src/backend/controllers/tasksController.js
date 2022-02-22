var Tasks = require("../models/tasks");
var async = require("async");

exports.tasks_list = function (req, res) {
  Tasks.find({}).exec(function (err, list_tasks) {
    if (err) {
      return next(err);
    }
    console.log(list_tasks);
    res.json(list_tasks);
  });
};

// GET single task by ID:
exports.task_detail = function (req, res) {
  Tasks.findById(req.params.id).exec(function (err, task) {
    if (err) {
      return next(err);
    }
    if (task == null) {
      // No results.
      res.redirect("/api/tasks");
    }
    res.json(task);
  });
};

// GET all tasks for user by user ID:
exports.user_tasks_list = function (req, res) {
  res.send(`NOT IMPLEMENTED: Tasks detail: ${req.params.user_id}`);
};

exports.tasks_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Tasks create GET");
};

exports.tasks_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Tasks create POST");
};

exports.tasks_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Tasks delete GET");
};

exports.tasks_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Tasks delete POST");
};

exports.tasks_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Tasks update GET");
};

exports.tasks_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Taskssgg update POST");
};
