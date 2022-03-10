const express = require("express");
const router = express.Router();
const tasks_controller = require("../controllers/tasksController");

// TASKS ROUTES //

// Get all tasks:
// GET /api/tasks
router.get("/", tasks_controller.tasks_list);

// Get a single task:
// GET /api/tasks/:id
router.get("/:id", tasks_controller.task_detail);

// This is supposed to be for cases when no user_id is passed:
// GET /api/tasks/user/
router.get("/user", tasks_controller.empty_user_tasks_list);

// Get all tasks for a single user:
// GET /api/tasks/user/:user_id
router.get("/user/:user_id", tasks_controller.user_tasks_list);

// Create a task:
// POST /api/tasks/create
router.post("/create", tasks_controller.task_create_post);

// Delete a task:
// GET /api/tasks/delete/:id
router.get("/delete/:id", tasks_controller.task_delete_get);

// Update a task:
// POST /api/tasks/update
router.post("/update/:id", tasks_controller.task_update_post);

// Export routes:
module.exports = router;
