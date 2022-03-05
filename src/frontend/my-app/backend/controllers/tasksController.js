var Tasks = require("../models/tasks");
const { body, validationResult } = require("express-validator");
//var async = require("async");

// GET /api/tasks
exports.tasks_list = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.find({}).exec(function (err, tasks) {
    if (err) {
      return next(err);
    }
    res.json(tasks);
  });
};

// FIXME If a user ID is passed here, func returns null instead of a 500.
// Do we need to consider this?
// GET /api/tasks/:id
exports.task_detail = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.findById(req.params.id).exec(function (err, task) {
    if (err) {
      return next(err);
    }
    res.json(task);
  });
};

// GET /api/tasks/user/:id
exports.user_tasks_list = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.find({ user_id: `${req.params.user_id}` }).exec(function (err, tasks) {
    if (err) {
      return next(err);
    }
    res.json(tasks);
  });
};

// GET /api/tasks/create
// exports.task_create_get = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks create GET");
// };

// POST /api/tasks/create
exports.task_create_post = [
  // Validate and sanitize fields.
  body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("comment", "").trim().escape(),
  body("start_date", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  body("end_date", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  body("completed", "").default(false).escape(),
  body("location", "").trim().escape(),
  body("user", "User must not be empty.").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Task object with escaped and trimmed data.
    var task = new Tasks({
      name: req.body.name,
      comment: req.body.comment,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      completed: req.body.completed,
      location: req.body.location,
      user_id: req.body.user_id,
    });

    // TODO Not sure what this should look like yet:
    if (!errors.isEmpty()) {
      // Return some error info:

      console.log("Error in task_create_post!");
    } else {
      // Data from form is valid. Save book.
      task.save(function (err) {
        if (err) {
          return next(err);
        }
        // Success -- return status:
        res.status(200);
      });
    }
  },
];

// GET /api/tasks/delete/:id
exports.task_delete_get = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  console.log(req.params.id);
  Tasks.findById(req.params.id).exec(function (err, task) {
    if (err) {
      return next(err);
    }
    // FIXME Is this the best response if the task ID is not found?
    if (task == null) {
      res.sendStatus(404);
    }
    // Delete object and respond with a 200 on success.
    Tasks.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        return next(err);
      }
    });
    // Success - respond as such:
    res.sendStatus(200);
  });
};

// POST /api/tasks/delete
// exports.task_delete_post = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks delete POST");
// };

// GET /api/tasks/update
// exports.task_update_get = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks update GET");
// };

// POST /api/tasks/update
exports.task_update_post = [
  // Validate and sanitize fields.
  body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("comment", "").trim().escape(),
  body("start_date", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  body("end_date", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  body("completed", "").default(false).escape(),
  body("location", "").trim().escape(),
  body("user", "User must not be empty.").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped and trimmed data.
    var task = new Tasks({
      _id: req.body.id,
      name: req.body.name,
      comment: req.body.comment,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      completed: req.body.completed,
      location: req.body.location,
      user_id: req.body.user_id,
    });

    // TODO Not sure what this should look like:
    if (!errors.isEmpty()) {
      // Return some error info:
      console.log("There were errors in the request. Please try again.");
    } else {
      // Data from form is valid. Update the record.
      Tasks.findByIdAndUpdate(req.params.id, task, {}, function (err) {
        if (err) {
          return next(err);
        }
        // Successful - send status:
        res.status(200);
      });
    }
  },
];
