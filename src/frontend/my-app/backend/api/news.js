var express = require("express");
var router = express.Router();

var news_controller = require("../controllers/newsController");

// NEWS ROUTES //
router.get("/", news_controller.news_list);

router.get("/create", news_controller.news_create_get);

router.post("/create", news_controller.news_create_post);

router.get("/:id/delete", news_controller.news_delete_get);

router.post("/:id/delete", news_controller.news_delete_post);

router.get("/:id/update", news_controller.news_update_get);

router.post("/:id/update", news_controller.news_update_post);

router.get("/:id", news_controller.news_detail);

module.exports = router;
