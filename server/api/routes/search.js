/**
 * Created by sanjaymurali on 11/22/16.
 */

// Route to provide search feature.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

router.post('/', function (req, res) {
    var moviename = req.body.title;
    var title = '';
    title += '%' + moviename + '%'; //Wildcard
    var rjson = {};

    sql.query("SELECT * from movie where title like ?", {
        replacements: [title],
        type: sql.QueryTypes.SELECT
    }).then(function (movies) {
        if (movies.length == 0) {
            res.json({success: false});
        }
        else {
            rjson.success = true;
            rjson.movies = movies;
            res.json(rjson);
        }

    }).catch(function (err) {
        res.json({success: false});
    });

});


module.exports = router;