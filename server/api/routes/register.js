/**
 * Created by sanjaymurali on 10/10/16.
 */

// Route for registration.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

router.post('/', function (req, res, next) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var password = req.body.password;
    var admin = 0; // A normal user

    /* Get the last user id from the DB, so that new user can be added after incrementing id */
    sql.query("SELECT id FROM user ORDER BY id DESC LIMIT 1", {type: sql.QueryTypes.SELECT}).then(function (userid) {
        var lastuserid = (userid.length == 0) ? 0 : userid[0].id;
        ++lastuserid;

        sql.query("INSERT INTO `user` (`id`,`first_name`,`last_name`,`email`,`password`,`admin`) VALUES (?,?,?,?,?,?)",
            {replacements: [lastuserid, fname, lname, email, password, admin]}).spread(function (result, metadata) {

            var affected_rows = metadata.affectedRows;
            if (affected_rows == 1)
                res.json({success: true, message: "Successfully Registered"});
            else
                res.json({success: false, message: "Not Registered"});

        }).catch(function (err) {
            res.json({success: false, message: "Already Exists"});
        });
    }).catch(function (err) {
        res.json({success: false, message: "Connection Problem"});
    });
});

module.exports = router;