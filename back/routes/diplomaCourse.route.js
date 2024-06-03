const express = require("express");
const router = express.Router();
const diplomaCourseController = require("../controllers/diplomaCourse.controller");

// Route to create a new diploma course
router.post("/diploma_courses", diplomaCourseController.createDiplomaCourse);

// Route to get all diploma courses
router.get("/diploma_courses", diplomaCourseController.getAllDiplomaCourses);

// Route to get a specific diploma course by ID
router.get(
  "/diploma_courses/:id",
  diplomaCourseController.getDiplomaCourseById
);

// Route to update a specific diploma course by ID
router.put(
  "/diploma_courses/:id",
  diplomaCourseController.updateDiplomaCourseById
);

// Route to delete a specific diploma course by ID
router.delete(
  "/diploma_courses/:id",
  diplomaCourseController.deleteDiplomaCourseById
);

module.exports = router;
