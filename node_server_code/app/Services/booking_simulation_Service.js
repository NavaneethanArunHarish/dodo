var dao = require("../DAO/booking_simulation_Dao")


module.exports.save_booking_simulation = function (detail, callback) {

    dao.save_booking_simulation(detail, function (data) {

        callback(data);

    });

}

module.exports.getall_booking = function (detail, callback) {

    dao.getall_booking(detail, function (data) {

        callback(data);

    });

}