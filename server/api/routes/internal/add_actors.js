/**
 * Created by sanjaymurali on 11/25/16.
 */

// Routes for Adding actors/actress biography

var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var verify_token = require('../../../database/verify-token');

router.post('/', verify_token, function (req, res) {
    var body = req.body;
    var userid = req.decoded.data;

    var actor_name = body.name;
    var actor_bio = body.bio;
    var actor_imgurl = body.imgurl;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {
        admin_value = admin_value[0].admin;

        if ((admin_value == 1) || (admin_value == 2)) {

            // Add the biography submitted by admin.
            sql.query('insert into biography (`name`,`bio`,`imgurl`) VALUES (?,?,?)',
                {replacements: [actor_name, actor_bio, actor_imgurl]}).spread(function (result, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true});
                else
                    res.json({success: false});
            }).catch(function (err) {
                res.json({success: false});
            });

        }
        else {
            res.json({success: false});
        }
    }).catch(function (err) {
        res.json({success: false});
    });


});

module.exports = router;