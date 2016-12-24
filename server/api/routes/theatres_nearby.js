/**
 * Created by sanjaymurali on 11/22/16.
 */


// Route to show the theatres nearby

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

// Get from here : http://www.imdb.com/showtimes/US/02118

router.get('/', function (req, res) {
    var theatres = {};
    sql.query('select * from theatres', {type: sql.QueryTypes.SELECT}).then(function (nearby) {
        if (nearby.length == 0) {
            theatres.success = false;
            theatres.list = [];
            res.json(theatres);
        }
        else {
            theatres.success = true;
            theatres.list = nearby;
            res.json(theatres);
        }
    }).catch(function (err) {
        res.json({success: false})
    });
});

router.post('/', function (req, res) {


});
module.exports = router;