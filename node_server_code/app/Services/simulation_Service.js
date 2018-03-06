var dao = require("../DAO/simulation_Dao")


module.exports.save_simulation = function (detail, callback) {

    dao.save_simulation(detail, function (data) {

        callback(data);

    });

}

module.exports.getall_simulation = function (detail, callback) {

    dao.getall_simulation(detail, function (data) {

        callback(data);

    });

}