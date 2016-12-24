/**
 * Created by sanjaymurali on 11/25/16.
 */

// Route to get biographies for every actor/actress in the DB.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

// GET All Actor/Actress Bios
router.get('/', function (req, res, next) {

    sql.query("SELECT * from biography", {type: sql.QueryTypes.SELECT}).then(function (bios) {
        res.json({success: true, bios: bios});

    }).catch(function (err) {
        res.json({success: "false", message: "Connection Problem"});
    });


});

module.exports = router;