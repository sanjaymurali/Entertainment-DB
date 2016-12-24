/**
 * Created by sanjaymurali on 11/24/16.
 */

// Routes to classify movies based on genres.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');
var lodash = require('lodash');

router.get('/', function (req, res) {

    sql.query('select * from movie', {type: sql.QueryTypes.SELECT}).then(function (details) {

        var totallength = details.length;
        var genres = [];
        var temp = "";
        var count = 0;
        var individualgenre = [];

        // To break a list of genres into individual ones.
        /**
         * Examples: "Action, Sci-Fi" (From DB for a particular Movie) => ["Action","Sci-Fi"]
         */
        for (var i = 0; i < totallength; i++) {
            temp += details[i].genre;
            if (count < (totallength - 1)) {
                temp += ", ";
                count++;
            }
            else
                break;
        }

        genres = temp.split(", ");

        // lodash is used to remove duplicate entries of the same genres.
        genres = lodash.uniq(genres);
        res.json({success: true, genres: genres, movie: details});


    }).catch(function (err) {
        res.json({success: false});
    });
});

// When user interacts with the drop down selection in clssify genre page.
router.post('/', function (req, res, next) {
    var genre = req.body.genre;
    if (genre == "All") {

        /* Get All Movies */
        sql.query("SELECT * from movie", {type: sql.QueryTypes.SELECT}).then(function (movies) {
            res.json({success: true, movies: movies});
        }).catch(function (err) {
            res.json({success: "false", message: "Connection Problem"});
        });
    }
    // if a particular genre is selected, return omly movies that belong to that genre.
    else {
        var sqlQuery = 'select * from movie where genre like \'%' + genre + '%\'';

        sql.query(sqlQuery, {replacements: [genre], type: sql.QueryTypes.SELECT}).then(function (details) {
            res.json({success: true, movies: details});
        }).catch(function (err) {
            res.json({success: false});
        });
    }

});

module.exports = router;