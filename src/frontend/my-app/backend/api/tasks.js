var express = require("express");
var router = express.Router();

var tasks_controller = require("../controllers/tasksController");

// TASKS ROUTES //

// GET /api/tasks
router.get("/", tasks_controller.tasks_list);

// GET /api/tasks/:id
router.get("/:id", tasks_controller.task_detail);

// GET /api/tasks/user/:id
router.get("/user/:user_id", tasks_controller.user_tasks_list);

// GET /api/tasks/create
//router.get("/create", tasks_controller.task_create_get);

// POST /api/tasks/create
router.post("/create", tasks_controller.task_create_post);

// GET /api/tasks/delete/:id
router.get("/delete/:id", tasks_controller.task_delete_get);

// POST /api/tasks/delete
//router.post("/:id/delete", tasks_controller.task_delete_post);

// GET /api/tasks/update
//router.get("/:id/update", tasks_controller.task_update_get);

// POST /api/tasks/update
router.post("/update/:id", tasks_controller.task_update_post);

module.exports = router;
