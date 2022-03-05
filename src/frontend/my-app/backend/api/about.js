const express = require("express");
const router = express.Router();
const about_controller = require("../controllers/aboutController");

// ABOUT ROUTES

// /api/about GET
router.get("/", about_controller.about_list);

// /api/about/:id GET
router.get("/:id", about_controller.about_detail);

// /api/about/create POST
router.post("/create", about_controller.about_person_create);

// /api/about/delete/:id GET
router.get("/delete/:id", about_controller.about_person_delete);

// /api/update/:id GET
router.get("/update/:id", about_controller.about_person_update_get);

// /api/:id/update POST
router.post("/update/:id", about_controller.about_person_update_post);

// Export routes:
module.exports = router;
