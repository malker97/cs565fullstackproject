var express = require("express");
var router = express.Router();

var users_controller = require("../controllers/usersController");

// ABOUT ROUTES
// /api/users GET
router.get("/", users_controller.users_list);

// /api/users/:id GET
router.get("/:id", users_controller.users_detail);

// /api/users/create POST
router.post("/create", users_controller.users_create);

// /api/users/delete/:id GET
router.get("/delete/:id", users_controller.users_delete);

// /api/users/update/:id GET
router.get("/update/:id", users_controller.users_update_get);

// /api/users/update/:id POST
router.post("/update/:id", users_controller.users_update_post);

module.exports = router;
