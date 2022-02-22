var express = require("express");
var router = express.Router();

var tasks_controller = require("../controllers/tasksController");

// TASKS ROUTES //
router.get("/", tasks_controller.tasks_list);

router.get("/:id", tasks_controller.task_detail);

router.get("/user/:id", tasks_controller.user_tasks_list);

router.get("/create", tasks_controller.tasks_create_get);

router.post("/create", tasks_controller.tasks_create_post);

router.get("/:id/delete", tasks_controller.tasks_delete_get);

router.post("/:id/delete", tasks_controller.tasks_delete_post);

router.get("/:id/update", tasks_controller.tasks_update_get);

router.post("/:id/update", tasks_controller.tasks_update_post);

module.exports = router;
