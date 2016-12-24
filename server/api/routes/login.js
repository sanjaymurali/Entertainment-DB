/**
 * Created by sanjaymurali on 11/16/16.
 */

// Route to login and set session for an user

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET Login page. */
router.get('/', function (req, res, next) {
    res.json({success: true, message: "Nothing in here!"});
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    /* to check whether an user with the given credential exists or not in the db */
    sql.query("SELECT * FROM user where email = ? and password = ?",
        {replacements: [email, password], type: sql.QueryTypes.SELECT}).then(function (result) {

        if (result.length == 0) {
            res.json({success: false, message: "Not authorized"});
        }

        else {
            /**
             * We create a token for the user with user's id being the data being passed
             * The secret key used is "edbsecret" for coding and decoding the token to
             * check the user's authenticity for accessing various pages.
             */
            var token = jwt.sign({data: result[0].id}, 'edbsecret', {
                expiresIn: 86400 // expires in 24 hours

            });
            res.json({success: true, token: token});
        }

    }).catch(function (err) {
        res.json({success: false, message: "Connection Problem"});
    });

});

module.exports = router;