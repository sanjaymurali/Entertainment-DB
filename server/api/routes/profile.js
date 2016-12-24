// Route to provide user details.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET users listing. */
router.get('/', verify_token, function (req, res, next) {
    var userid = req.decoded.data;
    var user_info = {};

    /* Get the complete info for a Given Userid */
    sql.query("SELECT id,first_name,last_name,email,admin from user where id = ?",
        {replacements: [userid], type: sql.QueryTypes.SELECT}).then(function (user) {

        /**
         * Check whether the user is an admin or moderator and set the JSON fields
         * 'admin' and 'moderator' true/false based on it.
         */

        var admin_info = user[0];

        if (admin_info.admin == 1) {
            user_info.admin = true;
            user_info.moderator = true;
        }
        else if (admin_info.admin == 2) {
            user_info.admin = false;
            user_info.moderator = true;
        }

        else {
            user_info.admin = false;
            user_info.moderator = false;
        }
        user_info.user_details = admin_info;

        user_info.success = true;
        res.json(user_info);

    }).catch(function (err) {
        res.json({success: false, message: "Invalid user"});
    });

});

module.exports = router;
