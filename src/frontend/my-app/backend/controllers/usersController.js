var Users = require("../models/users");
const { body, validationResult } = require("express-validator");
//var async = require("async");

exports.users_list = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Users.find({}).exec(function (err, list_users) {
    if (err) {
      return next(err);
    }
    res.json(list_users);
  });
};

exports.user_detail = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Users.findById(req.params.id).exec(function (err, detail_user) {
    if (err) {
      return next(err);
    }
    if (detail_user == null) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }
    res.json(detail_user);
  });
};

// Handle Users create on POST.
exports.user_create = [
  // Validate and sanitize the fields:
  body("name", "Name required").trim().isLength({ min: 1 }).escape(),
  body("description", "").trim().isLength({ min: 1 }).escape(),
  //body("image", "").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a users object with escaped and trimmed data.
    var new_user = new Users({
      name: req.body.name,
      description: req.body.name,
      //image: req.body.image,
    });

    if (!errors.isEmpty()) {
      // FIXME Not sure what should happen here.
      // Right now I'm passing an array with the errors array.
      return errors.array();
    } else {
      new_user.save(function (err) {
        if (err) {
          return next(err);
        }
        // Person saved. Respond with success:
        res.status(200);
      });
    }
  },
];

// Handle person delete on GET.
exports.user_delete = function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  Users.findById(req.params.id).exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      console.log(err);
      res.status(404);
    }

    // Delete object and
    Users.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        return next(err);
      }
    });

    // Success -- respond as such
    res.status(200);
  });
};

// // Return JSON for person to update on GET.
// exports.user_update_get = function (req, res) {
//   res.send("NOT IMPLEMENTED: Person update GET");
// };

// Handle person update on POST.
exports.user_update_post = [
  // Validate and sanitize the name field.
  body("name", "Name required").trim().isLength({ min: 1 }).escape(),
  body("description", "Description required").trim().isLength({ min: 1 }).escape(),
  //body("image", "").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var user = new Users({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      _id: req.params.id,
    });
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values and error messages.
      Users.findById(req.params.id).exec(function (err, user) {
        if (err) {
          return next(err);
        }
        return errors.array();
      });
    } else {
      // Data from form is valid. Update the record.
      Users.findByIdAndUpdate(req.params.id, user, {}, function (err) {
        if (err) {
          return next(err);
        }
        // Successful - respond as such:
        res.status(200);
      });
    }
  },
];
