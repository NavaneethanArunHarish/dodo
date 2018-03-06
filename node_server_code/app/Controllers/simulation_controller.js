const passport = require('passport');
const BookingSimulation = require('../Models/booking_simulation_model');
const Simulation = require('../Models/simulation_model');
const simulation_service = require("../Services/simulation_Service");
const booking_service = require("../Services/booking_simulation_Service");
var wrapper = require('../../app/constants/wrapper')
var jsonwebtoken = require("jsonwebtoken");
var winston = require('winston')


exports.postSimulation = (req, res, next) => {
    simulation_service.save_simulation(req.body, function (data) {
		if (data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: data
            });
    });
}

exports.postBooking = (req, res, next) => {
    booking_service.save_booking_simulation(req.body, function (data) {
        if (data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: data
            });
    });
}

module.exports.getall_simulation = function (req, res) {
    simulation_service.getall_simulation(function (detail) {
        if (detail.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detail.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detail
            });

    })
}

module.exports.getall_bookingDetails = function (req, res) {
    booking_service.getall_booking(function (detail) {
        if (detail.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detail.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detail
            });

    })
}