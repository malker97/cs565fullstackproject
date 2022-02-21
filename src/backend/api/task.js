var express = require("express");
var router = express.Router();

var task_controller = require("../controllers/taskController");

// TASK ROUTES //
router.get("/", task_controller.task_list);

router.get("/create", task_controller.task_create_get);

router.post("/create", task_controller.task_create_post);

router.get("/:id/delete", task_controller.task_delete_get);

router.post("/:id/delete", task_controller.task_delete_post);

router.get("/:id/update", task_controller.task_update_get);

router.post("/:id/update", task_controller.task_update_post);

router.get("/:id", task_controller.task_detail);

module.exports = router;
