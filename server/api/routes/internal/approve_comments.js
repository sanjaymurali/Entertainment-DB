/**
 * Created by sanjaymurali on 11/23/16.
 */

// Routes to Approve/Unapprove comments.

/**
 Note When approved is set to 0, The comment isnt displayed to public
 but it would be displayed to the user who has posted it with the
 warning "Comment not yet approved!". When the comment is approved by a moderator
 or admin, the approved flag is set to 1, which will display the comment to everyone.
 */

var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var verify_token = require('../../../database/verify-token');

// to approve comment
router.put('/', verify_token, function (req, res) {

    var comment = req.body;
    var userid = req.decoded.data;
    var userid_body = (comment.userid) * 1;
    var movieid_body = (comment.movieid) * 1;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {
        admin_value = admin_value[0].admin;

        if ((admin_value == 1) || (admin_value == 2)) {

            // Approve a comment of user by setting approved flag as 1
            sql.query('update user_ratings set approved=1 where userid=? and movieid=?',
                {replacements: [userid_body, movieid_body]}).spread(function (results, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true, message: "Comment Approved"});
                else
                    res.json({success: false, message: "Comment not approved"});

            }).catch(function (err) {
                res.json({success: false, message: "Unable to approve comment"});
            });
        }
        else
            res.json({success: false});
    }).catch(function (err) {
        res.json({success: false});
    });

});

// To Unapprove a comment
router.delete('/', verify_token, function (req, res) {
    var comment = req.body;
    var userid = req.decoded.data;
    var userid_body = (comment.userid) * 1;
    var movieid_body = (comment.movieid) * 1;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {
        admin_value = admin_value[0].admin;

        if ((admin_value == 1) || (admin_value == 2)) {

            // Unapprove a comment by setting the approved flag to 0.
            sql.query('update user_ratings set approved=0 where userid=? and movieid=?',
                {replacements: [userid_body, movieid_body]}).spread(function (results, metadata) {

                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true, message: "Comment removed"});
                else
                    res.json({success: false, message: "Problem!"});

            }).catch(function (err) {
                res.json({success: false, message: "Unable to unapprove comment"});
            });
        }
        else
            res.json({success: false});
    }).catch(function (err) {
        res.json({success: false});
    });

});

module.exports = router;