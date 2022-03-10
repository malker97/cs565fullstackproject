const Tasks = require("../models/tasks");
const Users = require("../models/users");
const { body, validationResult } = require("express-validator");

// The only code used in the final project so far is for these endpoints:
//
// GET /api/tasks/user/:id -> user_task_list()
// POST /api/tasks/create -> task_create_post[]
//
// Rest of the code was set up as a starting point for other CRUD operations.
// It was only minimally tested upon creation and has not been updated as the
// codebase has evolved.

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

// GET /api/tasks/:id
// FIXME If a user ID is passed here, func returns null instead of a 500:
exports.task_detail = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Tasks.findById(req.params.id).exec((err, task) => {
    if (err) {
      return next(err);
    }
    res.json(task);
  });
};

// For when no user name is passed -- doesn't seem to work, not sure why not?:
// GET /api/tasks/user
exports.empty_user_tasks_list = (req, res, next) => {
  console.log("We didn't receive a user name, please re-enter/re-submit.");
  return res.status(400);
};

// *** This endpoint is used ***
// GET /api/tasks/user/:user_id
// Provide the front end with the task list for a given user:
exports.user_tasks_list = (req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  // We now search for user name, not user id, but the param is still user_id.
  // Look for the user name in the DB:
  Users.findOne({ name: `${req.params.user_id}` }).exec((err, user) => {
    //console.log("user: ", user);
    if (err) {
      console.log("Find user failure.");
      return next(err);
    }
    // If we find the user ...
    if (user !== null) {
      console.log("user._id: ", user._id);
      console.log("name: ", req.params.user_id);

      // ... get all tasks for that user:
      Tasks.find({ user_id: `${user._id}` }).exec((err, tasks) => {
        if (err) {
          console.log("Find tasks failure.");
          return next(err);
        }
        // And return the tasks JSON in the response.
        res.json(tasks);
      });
      // If we do not find the user ...
    } else {
      console.log("new user: ", req.params.user_id);
      // ... create a new user:
      const new_user = new Users({
        name: req.params.user_id,
      });
      // And save the new user to the DB:
      new_user.save((err) => {
        if (err) {
          console.log("New user save failure.");
          return next(err);
        }
        // Success -- respond with the new user JSON so FE knows what happened:
        res.json(new_user);
      });
    }
  });
};

// *** This endpoint is used ***
// POST /api/tasks/create
// When the front end submits the createtask form:
exports.task_create_post = [
  // Validate and sanitize fields from POSTed form.
  // I removed some requirements because currently there's no FE validation.
  body("eventttl", "Name must not be empty.").trim().escape(),
  body("description", "").trim().escape(),
  body("startDate", "Invalid date.")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("endDate", "Invalid date.")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("location", "").trim().escape(),
  body("user_id", "User must not be empty.").trim().escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (req.body.user_id == null) {
      console.log("User must not be null.");
      res.status(400);
    }

    console.log("user_id: ", req.body.user_id);
    Users.findOne({ name: `${req.body.user_id}` })
      .populate("_id")
      .exec((err, user) => {
        if (err) {
          console.log("Find user failure.");
          return next(err);
        }

        // Create a Task object with escaped and trimmed data.
        const task = new Tasks({
          name: req.body.eventttl,
          comment: req.body.description,
          start_time: req.body.startDate,
          end_time: req.body.endDate,
          location: req.body.location,
          user_id: user._id, //user_id,
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
      });
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
  body("start_date", "Invalid date.")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("end_date", "Invalid date.")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
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
