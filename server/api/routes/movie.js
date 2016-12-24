/**
 * Created by sanjaymurali on 11/19/16.
 */

// Routes for showing all movies or a single movie from the DB.

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET All movies */
router.get('/', function (req, res) {

    var moviesJSON = {};
    /* Get All Movies */
    sql.query("SELECT * from movie", {type: sql.QueryTypes.SELECT}).then(function (movies) {
        moviesJSON.success = true
        moviesJSON.movies = movies;
        res.json(moviesJSON);

    }).catch(function (err) {
        res.json({success: "false", message: "Connection Problem"});
    });
});

/* get a single movie */
router.get('/:id', function (req, res) {
    var movie_id = (req.params.id) * 1;

    var movieJSON = {};

    /* Get All Movies */
    sql.query("SELECT * from movie where id = ?", {
        replacements: [movie_id],
        type: sql.QueryTypes.SELECT
    }).then(function (movie) {
        if (movie.length == 0) {
            res.json({success: false});
        }
        else {
            movieJSON.success = true;
            movieJSON.movie = movie;
            res.json(movieJSON);
        }

    }).catch(function (err) {
        res.json({success: false, message: "Connection Problem"});
    });


});


module.exports = router;