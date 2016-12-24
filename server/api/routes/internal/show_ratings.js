/**
 * Created by sanjaymurali on 11/23/16.
 */

/**
 * routes for Showing all the comments for approval and
 * routes for showing the comments for a particular movie.
 */


var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var jwt = require('jsonwebtoken');

// Modified version of verify-token.
var token_check = function (req, res, next) {

    // check header for edb-user-token
    var token = req.headers['edb-user-token'];

    // decode token
    if (token) {

        jwt.verify(token, 'edbsecret', function (err, decoded) {
            if (err) {
                err.success = false
                req.err = err
                next();
            }
            else {
                decoded.success = true;
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // if there is no token return an error
        err.success = false;
        req.err = err
        next();
    }

};

// Get all comments from the DB.
router.get('/', function (req, res) {

    var sqlQuery = "select user_ratings.userid,user_ratings.movieid,user_ratings.user_rating," +
        "user_ratings.review,user_ratings.approved,user.first_name,user.last_name,user.admin,movie.title" +
        " from user_ratings inner join user inner join movie where user.id = user_ratings.userid" +
        " and movie.id = user_ratings.movieid";

    sql.query(sqlQuery, {type: sql.QueryTypes.SELECT}).then(function (ratings) {
        res.json(ratings);
    }).catch(function (err) {
        res.json({success: false});
    });
});

// Get comments for a particular movie
router.get('/:movie_id', token_check, function (req, res) {
    var movie_id = req.params.movie_id;
    var userid;
    var resjson = {};

    if (req.hasOwnProperty('err'))
        userid = false;
    else
        userid = req.decoded.data;

    sql.query('select * from user_ratings inner join user where user.id = user_ratings.userid and movieid=?',
        {replacements: [movie_id], type: sql.QueryTypes.SELECT}).then(function (ratings) {

        for (var i = 0; i < ratings.length; i++) {
            delete ratings[i]['password'];
            delete ratings[i]['email'];

            if ((userid == ratings[i]['id']) && (ratings[i]['approved'] == 0)) {
                ratings[i]['visibletoself'] = true;
                ratings[i]['visibletoall'] = false;

            }
            else if ((userid != ratings[i]['id']) && (ratings[i]['approved'] == 0)) {
                ratings[i]['visibletoself'] = false;
                ratings[i]['visibletoall'] = false;

            }
            else {
                ratings[i]['visibletoself'] = true;
                ratings[i]['visibletoall'] = true;
            }

        }

        resjson.comments = ratings;
        resjson.success = true;
        res.json(resjson);

    }).catch(function (err) {
        res.json({success: false});
    });

});

module.exports = router;