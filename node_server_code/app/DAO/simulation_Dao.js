var Simulation = require('../Models/simulation_model');

module.exports.save_simulation = function (data, callback) {
    var simulation = new Simulation(data);
    simulation.save(function (err, result) {
        if (err) {
            callback(err);
        }
        else {
            callback(result);
        }
    })
};

module.exports.getall_simulation = function (callback) {
    Simulation.find(function (err, result) {
        if (err) {
            callback(err);
        }
        else {
            callback(result);
        }
    })

};