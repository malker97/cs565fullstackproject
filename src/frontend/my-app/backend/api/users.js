const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/usersController");

// ### THIS CODE IS NOT USED ###

// ABOUT ROUTES

// Get all users:
// GET /api/users
router.get("/", users_controller.users_list);

// Get a single user:
// GET /api/users/:id
router.get("/:id", users_controller.user_detail);

// Create a user:
// POST /api/users/create
router.post("/create", users_controller.user_create);

// Delete a user:
// GET /api/users/delete/:id
router.get("/delete/:id", users_controller.user_delete);

// Update a user:
// POST /api/users/update/:id
router.post("/update/:id", users_controller.user_update_post);

// Export routes:
module.exports = router;
