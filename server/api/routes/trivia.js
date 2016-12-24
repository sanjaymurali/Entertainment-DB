/**
 * Created by sanjaymurali on 11/21/16.
 */

// Route to show all the trivias

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET trivia page. */
router.get('/', function (req, res, next) {
    var items = {};
    sql.query('select * from trivia ORDER BY id desc', {type: sql.QueryTypes.SELECT}).then(function (trivias) {
        if (trivias.length == 0)
            res.json({success: false, message: "No Trivia Found"});
        else {
            items.success = true;
            items.items = trivias;
            res.json(items);
        }

    }).catch(function (err) {
        res.json({success: false, message: "No Trivia Found"});
    });
});

router.post('/', function (req, res, next) {
    res.json({success: false, message: "You cant do that!"});
});

module.exports = router;