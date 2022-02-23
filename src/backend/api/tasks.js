var express = require("express");
var router = express.Router();

var tasks_controller = require("../controllers/tasksController");

// TASKS ROUTES //

// GET /api/tasks
router.get("/", tasks_controller.tasks_list);

// GET /api/task/:id
router.get("/:id", tasks_controller.task_detail);

// GET /api/tasks/user/:id
router.get("/user/:id", tasks_controller.user_tasks_list);

// GET /api/task/create
router.get("/create", tasks_controller.task_create_get);

// POST /api/task/create
router.post("/create", tasks_controller.task_create_post);

// GET /api/task/delete
router.get("/:id/delete", tasks_controller.task_delete_get);

// POST /api/task/delete
router.post("/:id/delete", tasks_controller.task_delete_post);

// GET /api/task/update
router.get("/:id/update", tasks_controller.task_update_get);

// POST /api/task/update
router.post("/:id/update", tasks_controller.task_update_post);

module.exports = router;
