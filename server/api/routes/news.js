/**
 * Created by sanjaymurali on 11/21/16.
 */

// Routes to show entertainment news

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET Fav page. */
router.get('/', function (req, res, next) {
    var items = {};
    sql.query('select * from news ORDER BY id desc', {type: sql.QueryTypes.SELECT}).then(function (newsitems) {
        if (newsitems.length == 0) {
            res.json({success: false, message: "No News Found"});
        }
        else {
            items.success = true;
            items.items = newsitems;
            res.json(items);
        }

    }).catch(function (err) {
        res.json({success: false, message: "No News Found"});
    });
});

module.exports = router;