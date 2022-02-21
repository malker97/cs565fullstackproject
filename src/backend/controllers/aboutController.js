var About = require("../models/about");
var async = require("async");
const { body, validationResult } = require("express-validator");

exports.about_list = function (req, res, next) {
  About.find({}).exec(function (err, list_about) {
    if (err) {
      return next(err);
    }
    res.json(list_about);
  });
};

exports.about_detail = function (req, res, next) {
  About.findById(req.params.id).exec(function (err, detail_about) {
    if (err) {
      return next(err);
    }
    if (detail_about == null) {
      var err = new Error("Person not found");
      err.status = 404;
      return next(err);
    }
    res.json(detail_about);
  });
};

// Handle About person create on POST.
exports.about_person_create = [
  // Validate and sanitize the fields:
  body("name", "Name required").trim().isLength({ min: 1 }).escape(),
  body("description", "").trim().isLength({ min: 1 }).escape(),
  //body("image", "").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var new_person = new About({
      name: req.body.name,
      description: req.body.name,
      //image: req.body.image,
    });

    if (!errors.isEmpty()) {
      // FIXME Not sure what should happen here.
      // Right now I'm passing an array with the new_person object and the errors array.
      return [new_person, errors.array()];
    } else {
      // Data from form is valid. Check if person with same name already exists.
      About.findOne({ name: req.body.name }).exec(function (err, found_person) {
        if (err) {
          return next(err);
        }

        if (found_person) {
          // Person exists, redirect to person detail page.
          res.redirect(found_person.url);
        } else {
          new_person.save(function (err) {
            if (err) {
              return next(err);
            }
            // Person saved. Redirect to person detail page.
            //res.redirect(new_person.url);
            // FOR TESTING:
            res.redirect(`/api/about/${req.params.id}`);
          });
        }
      });
    }
  },
];

// Handle person delete on GET.
exports.about_person_delete = function (req, res, next) {
  About.findById(req.params.id).exec(function (err, person) {
    if (err) {
      return next(err);
    }
    if (person == null) {
      console.log(err);
      res.redirect("/about");
    }

    // Delete object and redirect to the about page:
    About.findByIdAndRemove(req.params.id, function deletePerson(err) {
      if (err) {
        return next(err);
      }
    });

    // Success - go to the about page:
    //res.redirect("/about");
    // FOR TESTING:
    res.redirect("/api/about");
  });
};

// Return JSON for person to update on GET.
exports.about_person_update_get = function (req, res) {
  About.findById(req.params.id).exec(function (err, person) {
    if (err) {
      return next(err);
    }
    if (person == null) {
      res.redirect("/about");
    }
    // Successful, so return data:
    return res.json(person);
  });
};

// Handle person update on POST.
exports.about_person_update_post = [
  // Validate and sanitize the name field.
  body("name", "Name required").trim().isLength({ min: 1 }).escape(),
  body("description", "Description required").trim().isLength({ min: 1 }).escape(),
  //body("image", "").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var person = new About({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      _id: req.params.id,
    });
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values and error messages.
      About.findById(req.params.id).exec(function (err, person) {
        if (err) {
          return next(err);
        }
        // TODO Not sure how to handle this. I think front end will re-render form?
        // Successful, so render.
        //res.render("genre_form", { title: "Update Genre", genre: genre });
        //return;

        // FIXME Not sure what should happen.
        // Right now I'm passing an array with the new_person object and the errors array.
        return [person, errors.array()];
      });
    } else {
      // Data from form is valid. Update the record.
      About.findByIdAndUpdate(req.params.id, person, {}, function (err, theperson) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new record.
        //res.redirect(theperson.url);
        // FOR TESTING:
        res.redirect(`/api/${theperson.url}`);
      });
    }
  },
];
