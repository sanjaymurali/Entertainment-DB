/**
 * Created by sanjaymurali on 11/18/16.
 */

// Routes for adding new movie and updating an existing movie

var imdb = require('imdb-api');
var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var verify_token = require('../../../database/verify-token');

/* GET Login page. */
router.get('/', function (req, res, next) {
    res.json({message: "Noting in here!"});
});

// To insert a new movie intp the DB
router.post('/', verify_token, function (req, res, next) {

    var userid = req.decoded.data;
    var moviereq = req.body.movie + '';
    var movie = moviereq;
    var title;
    var plot;
    var release_year;
    var runtime;
    var rating;
    var director;
    var actors;
    var genres;
    var language;
    var imdbid;
    var imgurl;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {

        admin_value = admin_value[0].admin;
        if ((admin_value == 1) || (admin_value == 2)) {

            // Use the imdb-api to get the details about a given movie.
            imdb.get(movie, function (err, things) {

                if (err) {
                    res.json({success: false});
                }
                else {
                    title = things.title;
                    plot = things.plot;
                    release_year = things.year;
                    runtime = things.runtime;
                    rating = (things.rating) * 1; //Rating is returned a String
                    director = things.director;
                    actors = things.actors;
                    genres = things.genres;
                    language = things.languages;
                    imdbid = things.imdbid;
                    imgurl = things.poster;

                    // The id field isnt auto-increment, so we need to manually find last id in the table.
                    sql.query("SELECT id FROM movie ORDER BY id DESC LIMIT 1",
                        {type: sql.QueryTypes.SELECT}).then(function (lastiddb) {

                        // if there are no records then insert the 1st one, else insert after last record
                        var lastid = (lastiddb.length == 0) ? 0 : lastiddb[0].id;
                        ++lastid;

                        // Insert into DB.
                        var sqlquery = "INSERT INTO `movie` " +
                            "(`id`,`title`,`plot`,`year`,`runtime`, `rating`, `director`," +
                            " `actor`, `genre`, `language`,`imdbid`,`imgurl`)" +
                            " VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

                        sql.query(sqlquery,
                            {
                                replacements: [lastid, title, plot, release_year, runtime, rating, director, actors, genres, language, imdbid, imgurl]
                            })
                            .spread(function (result, metadata) {

                                var affected_rows = metadata.affectedRows;
                                if (affected_rows == 1)
                                    res.json({success: true});
                                else
                                    res.json({success: false});

                            }).catch(function (err) {
                            res.json({success: false});
                        });
                    }).catch(function (err) {
                        res.json({success: false});
                    });
                }
            });

        }
        else
            res.json({success: false});

    }).catch(function (err) {
        res.json({success: false});
    });
});


// To update an already existing movie in the DB.
router.put('/', verify_token, function (req, res) {
    var userid = req.decoded.data;

    var movie = req.body;
    var id = req.body.id;
    var title = req.body.title;
    var plot = req.body.plot;
    var release_year = req.body.year;
    var runtime = req.body.runtime;
    var rating = req.body.rating;
    var director = req.body.director;
    var actors = req.body.actor;
    var genres = req.body.genre;
    var language = req.body.language;
    var imgurl = req.body.imgurl;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {

        admin_value = admin_value[0].admin;
        if ((admin_value == 1) || (admin_value == 2)) {
            var queryMovie = "update movie set title=?,plot=?,year=?,runtime=?,rating=?,director=?" +
                ",actor=?,genre=?,language=?,imgurl=? where id=?";

            sql.query(queryMovie,
                {replacements: [title, plot, release_year, runtime, rating, director, actors, genres, language, imgurl, id]})
                .spread(function (result, metadata) {
                    var affected_rows = metadata.affectedRows;
                    if (affected_rows == 1)
                        res.json({success: true, message: "Movie Updated"});
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