/**
 * Created by sanjaymurali on 11/22/16.
 */

// Routes to Add/Delete Moderators
/**
 * An administrator has a clearance level of 1. So the admin
 * field in the DB for an administrator is set to 1, while a
 * moderator has a clearance level of 2. So the moderator's level is
 * set as 2 for admin field in the DB.
 * Initially a user has a clearance level of 0.
 */

var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var verify_token = require('../../../database/verify-token');

router.get('/', verify_token, function (req, res) {
    var userid = req.decoded.data;
    var users = {};
    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {
        admin_value = admin_value[0].admin;

        if (admin_value == 1) {

            // This is done to return all the users other than the current user.
            sql.query('SELECT id,first_name,last_name,email,admin from user where id!=?',
                {replacements: [userid], type: sql.QueryTypes.SELECT}).then(function (response) {
                users.success = true;
                users.users = response;
                res.json(users);
            }).catch(function (err) {
                res.json({success: false});
            });
        }
        else
            res.json({success: false});

    }).catch(function (err) {
        res.json({success: false});
    });
});

router.post('/', verify_token, function (req, res, next) {
    var adminid = req.decoded.data;
    var userid = (req.body.userid) * 1;
    var level = 2; //Moderator
    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [adminid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {
        admin_value = admin_value[0].admin;

        if (admin_value == 1) {

            // Make a normal user a moderator.
            sql.query('update user set admin=? where id=?',
                {replacements: [level, userid]}).spread(function (response, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true, message: "Moderator Added"});
                else
                    res.json({success: false});
            }).catch(function (err) {
                res.json({success: false});
            });
        }
        else
            res.json({success: false});

    }).catch(function (err) {
        res.json({success: false});
    });
});

router.delete('/', verify_token, function (req, res, next) {
    var adminid = req.decoded.data;
    var userid = (req.body.userid) * 1;
    var level = 0; //Normal user
    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [adminid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {

        admin_value = admin_value[0].admin;

        if (admin_value == 1) {

            // Make a moderator a normal user.
            sql.query('update user set admin=? where id=?',
                {replacements: [level, userid]}).spread(function (response, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true, message: "Moderator Removed"});
                else
                    res.json({success: false});
            }).catch(function (err) {
                res.json({success: false});
            });
        }
        else
            res.json({success: false});

    }).catch(function (err) {
        res.json({success: false});
    });
});

module.exports = router;