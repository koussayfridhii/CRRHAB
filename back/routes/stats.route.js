const express = require("express");
const router = express.Router();
const { statsControllers } = require("../controllers/stats.controller");

// Routes for stats

router.get("/stats", statsControllers.getAllStats);
router.post("/stats", statsControllers.createStats);
router.put("/stats/:id", statsControllers.updateStats);
router.delete("/stats/:id", statsControllers.deleteStats);

module.exports = router;
