const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var simulation_schema = new mongoose.Schema({
    name:{type:String, default: ''},
    address:{type:String, default: ''},
    telephone:{type:String, default: ''},
    email:{type:String, default: ''},
    website:{type:String, default: ''},
    
});

var simulationdetails = mongoose.model('simulation', simulation_schema,'simulation');
module.exports = simulationdetails;