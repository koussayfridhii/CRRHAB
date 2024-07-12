const express = require('express');
const router = express.Router();
const openDataController = require('../controllers/openData.controller');
const passport = require("passport");
const { rolesMiddleware } = require("../middlewares/role");

// Route to create a new open data entry
router.post('/opendata', passport.authenticate("jwt", { session: false }),
rolesMiddleware.inRole(rolesMiddleware.roles.admin), openDataController.createOpenData);

// Route to get all open data entries
router.get('/opendata', openDataController.getAllOpenData);

// Route to get a specific open data entry by ID
router.get('/opendata/:id', openDataController.getOpenDataById);

// Route to update a specific open data entry by ID
router.put('/opendata/:id', passport.authenticate("jwt", { session: false }),
rolesMiddleware.inRole(rolesMiddleware.roles.admin), openDataController.updateOpenDataById);

// Route to delete a specific open data entry by ID
router.delete('/opendata/:id', passport.authenticate("jwt", { session: false }),
rolesMiddleware.inRole(rolesMiddleware.roles.admin), openDataController.deleteOpenDataById);

// Export the router
module.exports = router;
