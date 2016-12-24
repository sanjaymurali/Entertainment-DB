/**
 * Created by sanjaymurali on 11/20/16.
 */

// Routes to Show/Add comments for a particular movie

var express = require('express');
var router = express.Router();
var verify_token = require('../../database/verify-token');
var jwt = require('jsonwebtoken');
var sql = require('../../database/dbconnection');

router.get('/:movie_id', verify_token, function (req, res) {
    var movie_id = req.params.movie_id;
    var userid = req.decoded.data;
    var resjson = {};

    sql.query('select * from user_ratings inner join user where user.id = user_ratings.userid and movieid=?',
        {replacements: [movie_id], type: sql.QueryTypes.SELECT}).then(function (ratings) {

        for (var i = 0; i < ratings.length; i++) {
            delete ratings[i]['password'];
            delete ratings[i]['email'];
        }

        /**
         * Check whether a review/rating is approved i.e., approved = 1
         * then the visibility of that rating is set to true
         * else the visibility of that rating is set to false
         */

        if (ratings[0].approved == 1) {
            resjson.success = true;
            resjson.visibility = true;
            resjson.comment = ratings;
            res.json(resjson);
        }
        else {
            resjson.success = true;
            resjson.visibility = false;
            resjson.comment = ratings;
            res.json(resjson);
        }

    }).catch(function (err) {
        res.json({success: false});
    })

});

// Add comment for a particular movie.
router.post('/:movie_id', verify_token, function (req, res) {
    var movie_id = req.params.movie_id;
    var user_id = req.decoded.data;
    var rating = req.body.user_rating;
    var review = req.body.review;

    sql.query('select userid from user_ratings where userid=? and movieid=?',
        {replacements: [user_id, movie_id], type: sql.QueryTypes.SELECT}).then(function (details) {

        // User can add a review only once and no delete option is provided.
        if (details.length == 1) {
            res.json({success: false, message: "Already Exists"});
        }
        else {
            sql.query("INSERT INTO `user_ratings` (`userid`,`movieid`,`user_rating`,`review`) VALUES (?,?,?,?)",
                {replacements: [user_id, movie_id, rating, review]}).spread(function (result, metadata) {

                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true, message: "Comment added"});
                else
                    res.json({success: false, message: "Comment not added"});

            }).catch(function (err) {
                res.json({success: false, message: "Unable to add comment"});
            });
        }
    }).catch(function (err) {
        res.json({success: false, message: 'Connection Problem'});
    });


});


module.exports = router;