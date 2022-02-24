var Users = require("../models/users");
var async = require("async");
const { body, validationResult } = require("express-validator");

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
  Users.findById(req.params.id).exec(function (err, detail_user) {
    if (err) {
      return next(err);
    }
    if (detail_user == null) {
      var err = new Error("User not found");
      err.status = 404;
      return next(err);
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
      // Right now I'm passing an array with the new_user object and the errors array.
      return [new_user, errors.array()];
    } else {
      // Data from form is valid. Check if person with same name already exists.
      Users.findOne({ name: req.body.name }).exec(function (err, found_user) {
        if (err) {
          return next(err);
        }

        if (found_user) {
          // Person exists, redirect to person detail page.
          res.redirect(found_user.url);
        } else {
          new_user.save(function (err) {
            if (err) {
              return next(err);
            }
            // Person saved. Redirect to person detail page.
            //res.redirect(new_user.url);
            // FOR TESTING:
            res.redirect(`/api/users/${req.params.id}`);
          });
        }
      });
    }
  },
];

// Handle person delete on GET.
exports.user_delete = function (req, res, next) {
  Users.findById(req.params.id).exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      console.log(err);
      res.redirect("/users");
    }

    // Delete object and redirect to the users page:
    Users.findByIdAndRemove(req.params.id, function deletePerson(err) {
      if (err) {
        return next(err);
      }
    });

    // Success - go to the users page:
    //res.redirect("/users");
    // FOR TESTING:
    res.redirect("/api/users");
  });
};

// Return JSON for person to update on GET.
exports.user_update_get = function (req, res) {
  Users.findById(req.params.id).exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      res.redirect("/users");
    }
    // Successful, so return data:
    return res.json(user);
  });
};

// Handle person update on POST.
exports.user_update_post = [
  // Validate and sanitize the name field.
  body("name", "Name required").trim().isLength({ min: 1 }).escape(),
  body("description", "Description required").trim().isLength({ min: 1 }).escape(),
  //body("image", "").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
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
        // TODO Not sure how to handle this. I think front end will re-render form?
        // Successful, so render.
        //res.render("genre_form", { title: "Update Genre", genre: genre });
        //return;

        // FIXME Not sure what should happen.
        // Right now I'm passing an array with the new_user object and the errors array.
        return [user, errors.array()];
      });
    } else {
      // Data from form is valid. Update the record.
      Users.findByIdAndUpdate(req.params.id, user, {}, function (err, theUser) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new record.
        //res.redirect(theperson.url);
        // FOR TESTING:
        res.redirect(`/api/${theUser.url}`);
      });
    }
  },
];
