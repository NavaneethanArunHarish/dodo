var express = require("express");
var api = express.Router();
var routers = require("./router")
var authorize = require("../app/Controllers/user_controller");


api.use("/user", routers.User_Router);
api.use("/simulation", routers.Simulation_Router);

module.exports = api;