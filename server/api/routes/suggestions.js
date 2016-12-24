/**
 * Created by sanjaymurali on 11/24/16.
 */

// Route to give suggestions to user

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');


router.get('/', verify_token, function (req, res, next) {
    var userid = req.decoded.data;
    var items = {};

    /**
     * For showing suggestions , we take the favorite movies of an user
     * and then we return all the movies in the DB that are not in the user's favorites list
     */
    sql.query('select * from movie where id not in (select movieid from favorites where userid=?)',
        {replacements: [userid], type: sql.QueryTypes.SELECT}).then(function (suggs) {
        res.json({success: true, suggestions: suggs});

    }).catch(function (err) {
        res.json({success: false});
    });
});

router.post('/', function (req, res, next) {
    res.json({success: false, message: "You cant do that!"});
});

module.exports = router;