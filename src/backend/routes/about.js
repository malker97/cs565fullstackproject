var express = require("express");
var router = express.Router();

var about_controller = require("../controllers/aboutController");

// ABOUT ROUTES
router.get("/", about_controller.about);

module.exports = router;
