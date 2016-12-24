/**
 * Created by sanjaymurali on 11/16/16.
 */

// Routes to Add/Delete favorites movies

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

/* GET Fav page. */
router.get('/', verify_token, function (req, res, next) {
    var favoritesJson = {};
    var userid = req.decoded.data;

    var sqlQuery = "SELECT favorites.movieid,movie.title from movie inner join favorites where" +
        " movie.id = favorites.movieid and favorites.userid=?"
    /* Get favorites for a Given Userid */
    sql.query(sqlQuery, {replacements: [userid], type: sql.QueryTypes.SELECT}).then(function (favoritesDB) {

        if (favoritesDB.length == 0) {
            favoritesJson.success = false;
            favoritesJson.titles = [];
            res.json(favoritesJson);
        }
        else {
            favoritesJson.success = true;
            favoritesJson.titles = favoritesDB;
            res.json(favoritesJson);
        }
    }).catch(function (err) {
        res.json({success: false, message: "Connection Problem"});
    });


});

/**
 * To favorite a movie if its not already favorite of an user, and to
 * unfavorites a movie if its already favorite of an user.
 */

router.post('/', verify_token, function (req, res, next) {
    var movieid = (req.body.movieid) * 1;
    var userid = req.decoded.data;

    sql.query("SELECT * FROM favorites where userid=? and movieid=?", {
        replacements: [userid, movieid],
        type: sql.QueryTypes.SELECT
    }).then(function (response) {

        if (response.length == 0) {
            sql.query("INSERT INTO `favorites` (`userid`, `movieid`) VALUES (?,?)",
                {replacements: [userid, movieid]}).spread(function (result, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({deleted: false, success: true, message: "Successfully updated fav"});
                else
                    res.json({deleted: false, success: false, message: "Unsuccessful"});
            }).catch(function (err) {
                res.json({deleted: false, success: false, message: "Not Possible Insert"});
            });

        }
        else {
            sql.query('DELETE from favorites where userid=? and movieid=?', {
                replacements: [userid, movieid],
                type: sql.QueryTypes.DELETE
            }).then(function (res1) {
                res.json({deleted: true, success: true, message: "Successfully deleted"});
            }).catch(function (err) {
                res.json({deleted: true, success: false, message: "Not Possible to delete"});
            });
        }
    }).catch(function (err) {
        res.json({success: false, message: "Connection Problem"});
    });
});


module.exports = router;