var bookingSimulation = require('../Models/booking_simulation_model');
var nodemailer = require('nodemailer');

module.exports.save_booking_simulation = function (data, callback) {
    var booking_simulation = new bookingSimulation(data);
    console.log(">>>>>>>>",data.personalDetails.email);
    var emailId = data.personalDetails.email;
    booking_simulation.save(function (err, result) {
        if (err) {
            callback(err);
        }
        else {
            nodemailer.createTestAccount((err, account) => {
                
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: "navaneethan28508260@gmail.com", // generated ethereal user
                            pass: "28508260"  // generated ethereal password
                        }
                    });
                
                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: 'navaneethan28508260@gmail.com', // sender address
                        to: emailId, // list of receivers
                        subject: 'Hello ✔', // Subject line
                        text: 'Hello world?', // plain text body
                        html: '<b>Hello world?</b>' // html body
                    };
                
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                
                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                });
            callback(result);
        }
    })
};

module.exports.getall_booking = function (callback) {
    bookingSimulation.find(function (err, result) {
        if (err) {
            callback(err);
        }
        else {
            callback(result);
        }
    })

};