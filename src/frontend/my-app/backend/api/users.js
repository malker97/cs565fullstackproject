var express = require("express");
var router = express.Router();

var users_controller = require("../controllers/usersController");

// ABOUT ROUTES

// GET /api/users
router.get("/", users_controller.users_list);

// GET /api/users/:id
router.get("/:id", users_controller.user_detail);

// /api/users/create POST
router.post("/create", users_controller.user_create);

// GET /api/users/delete/:id
router.get("/delete/:id", users_controller.user_delete);

// GET /api/users/update/:id
router.get("/update/:id", users_controller.user_update_get);

// POST /api/users/update/:id
router.post("/update/:id", users_controller.user_update_post);

module.exports = router;
