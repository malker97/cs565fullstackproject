const Tasks = require("../models/tasks");
const Users = require("../models/users");
const { body, validationResult } = require("express-validator");
//var async = require("async");
const { DateTime } = require("luxon");

// GET /api/tasks
exports.tasks_list = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.find({}).exec((err, tasks) => {
    if (err) {
      return next(err);
    }
    res.json(tasks);
  });
};

// FIXME If a user ID is passed here, func returns null instead of a 500.
// Do we need to consider this?
// GET /api/tasks/:id
exports.task_detail = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.findById(req.params.id).exec((err, task) => {
    if (err) {
      return next(err);
    }
    res.json(task);
  });
};

// GET /api/tasks/user/:id
exports.user_tasks_list = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.find({ user_id: `${req.params.user_id}` }).exec((err, tasks) => {
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

  body("eventttl", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("description", "").trim().escape(),
  body("startDate", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  body("endDate", "Invalid date.").optional({ checkFalsy: true }).isISO8601().toDate(),
  //body("completed", "").default(false).escape(),
  body("location", "").trim().escape(),
  //body("user_id", "User must not be empty.").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    let user;
    if (req.body.user_id === "") {
      // Create a Task object with escaped and trimmed data.
      user = new Users({
        name: "Anonymous",
      });
      //console.log(`New user id: ${user._id}`);
    }

    let user_id;
    if (user !== undefined) {
      user_id = user._id;
      user.save((err) => {
        if (err) {
          console.log("New user save error.");
          return next(err);
        }
      });
    } else {
      user_id = req.body.user_id;
    }

    // Create a Task object with escaped and trimmed data.
    const task = new Tasks({
      name: req.body.eventttl,
      comment: req.body.description,
      start_time: req.body.startDate,
      end_time: req.body.endDate,
      location: req.body.location,
      user_id: user_id,
    });

    // TODO Not sure what this should look like yet:
    if (!errors.isEmpty()) {
      // Return some error info:
      console.log("Error in task_create_post!");
      if (task === undefined) {
        return;
      }
    } else {
      // Data from form is valid. Save task.
      task.save((err) => {
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
exports.task_delete_get = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  console.log(req.params.id);
  Tasks.findById(req.params.id).exec((err, task) => {
    if (err) {
      return next(err);
    }
    // FIXME Is this the best response if the task ID is not found?
    if (task == null) {
      res.sendStatus(404);
    }
    // Delete object and respond with a 200 on success.
    Tasks.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        return next(err);
      }
    });
    // Success - respond as such:
    res.sendStatus(200);
  });
};

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
    const task = new Tasks({
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
      Tasks.findByIdAndUpdate(req.params.id, task, {}, (err) => {
        if (err) {
          return next(err);
        }
        // Successful - send status:
        res.status(200);
      });
    }
  },
];
