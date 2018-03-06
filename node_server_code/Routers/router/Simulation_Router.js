var express = require("express");
var router = express.Router();
var simulationController = require("../../app/Controllers/simulation_controller");
const passportConfig = require('../../app/config/passport');
var authorize = require("../../app/Controllers/simulation_controller");


router.post('/createSimulation', simulationController.postSimulation);
router.post('/createBooking', simulationController.postBooking);
router.get('/getAllSimulation', simulationController.getall_simulation);
router.get('/getAllBooking', simulationController.getall_bookingDetails);
module.exports = router;