const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var booking_simulation_schema = new mongoose.Schema({
    groupType:{type:String, default: ''},
    participants:{
        participants: {type:String, default: '0'},
        youth: {type:String, default: '0'},
        accompanyingOne: {type:String, default: '0'},
        accompanyingTwo: {type:String, default: '0'},
    },
    date:{
        startDate: {type:Date, default: ''},
        endDate: {type:Date, default: ''},
    },
    accommodationOne: {
        twoBeds: {type:String, default: '0'},
        threeBeds: {type:String, default: '0'},
        fourBeds: {type:String, default: '0'},
        sixBeds: {type:String, default: '0'},
        secondThreeBeds: {type:String, default: '0'},
        description: {type:String, default: ''}
    },
    accommodationTwo: {
        twoBeds: {type:String, default: '0'},
        threeBeds: {type:String, default: '0'},
        fourBeds: {type:String, default: '0'},
        fiveBeds: {type:String, default: '0'}
    },
    restoration:{type:String, default: ''},
    interestIn:{type:String, default: ''},
    roomRental:{
        name:{type:String},
        surface:{type:String},
        wifi:{type:String},
        conference:{type:Boolean, default: false},
        class:{type:Boolean, default: false},
        meeting:{type:Boolean, default: false},
        uRoom:{type:Boolean, default: false},
        cocktail:{type:Boolean, default: false}
    },
    option:{
        cleaningSportsWear:{type:String},
        sportsFacilities:{type:String},
        liveForAGroup:{type:String},
        lastDeparture:{type:String}
    },
    personalDetails:{
        name:{type:String, default: ''},
        phone:{type:String, default: ''},
        email:{type:String, default: ''}
    },
	simulationName: { type: Schema.Types.ObjectId, ref: 'simulation' }
});

var bookingSimulationDetails = mongoose.model('bookingSimulation', booking_simulation_schema,'bookingSimulation');
module.exports = bookingSimulationDetails;