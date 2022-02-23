var Tasks = require("../models/tasks");
var async = require("async");

exports.tasks_list = function (req, res) {
  Tasks.find({}).exec(function (err, tasks) {
    if (err) {
      return next(err);
    }
    console.log(tasks);
    res.json(tasks);
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
  Tasks.find({ user_id: `${req.params.userID}` }).exec(function (err, tasks) {
    if (err) {
      return next(err);
    }
    if (tasks == null) {
      // No results.
      res.redirect("/api/tasks");
    }
    res.json(tasks);
  });
};

// exports.task_create_get = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks create GET");
// };

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
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped and trimmed data.
    var task = new Tasks({
      name: req.body.name,
      comment: req.body.comment,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      completed: req.body.completed,
      location: req.body.location,
      user_id: req.body.userID,
    });

    // TODO Not sure what this should look like yet:
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.
      // Get all authors and genres for form.
      // async.parallel(
      //   {
      //     authors: function (callback) {
      //       Author.find(callback);
      //     },
      //     genres: function (callback) {
      //       Genre.find(callback);
      //     },
      //   },
      //   function (err, results) {
      //     if (err) {
      //       return next(err);
      //     }
      //     res.render("book_form", { title: "Create Book", authors: results.authors, genres: results.genres, book: book, errors: errors.array() });
      //   }
      // );
      // return;
      console.log("Error in task_create_post!");
    } else {
      // Data from form is valid. Save book.
      task.save(function (err) {
        if (err) {
          return next(err);
        }
        //successful - redirect to new book record.
        //res.redirect(task.url);
        res.redirect(`/api/tasks/user/${req.body.userID}`);
      });
    }
  },
];

exports.task_delete_get = function (req, res) {
  Tasks.findById(req.params.id).exec(function (err, task) {
    if (err) {
      return next(err);
    }
    if (task == null) {
      // No results.
      res.redirect("/api/tasks");
    }
    // Delete object and redirect to the list of tasks.
    Tasks.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        return next(err);
      }
    });
    // Success - go to tasks list
    res.redirect("/api/tasks");
  });
};

// exports.task_delete_post = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks delete POST");
// };

// exports.task_update_get = function (req, res) {
//   res.send("NOT IMPLEMENTED: Tasks update GET");
// };

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
      user_id: req.body.userID,
    });

    // TODO Not sure what this should look like yet:
    if (!errors.isEmpty()) {
      //   // There are errors. Render form again with sanitized values and error messages.
      //   // FIXME
      //   BookInstance.findById(req.params.id).exec(function (err, bookinstance) {
      //     if (err) {
      //       return next(err);
      //     }
      //     // Successful, so render.
      //     res.render("bookinstance_form", { title: "Update BookInstance", book: book, bookinstance: bookinstance });
      //     return;
      //   });
    } else {
      // Data from form is valid. Update the record.
      Tasks.findByIdAndUpdate(req.params.id, task, {}, function (err, theTask) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new record.
        //res.redirect(theTask.url);
        res.redirect(`/api/tasks/${req.body.id}`);
      });
    }
  },
];
