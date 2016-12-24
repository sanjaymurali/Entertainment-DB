/**
 * Created by sanjaymurali on 11/21/16.
 */

// Routes for Getting a list of trivias and Adding new trivia to DB.

var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var verify_token = require('../../../database/verify-token');
var request = require('request');

router.get('/', function (req, res) {

    // URL for getting a list of trivia.
    var apiurl = "http://jservice.io/api/category?id=3144";

    var trivias = [];
    var questions = [];
    var answers = [];

    request({
        url: apiurl,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            trivias = body.clues;

            for (var i = 0; i < trivias.length; i++) {
                questions[i] = trivias[i].question;
                answers[i] = trivias[i].answer;
            }
            var inserq = "INSERT INTO `trivia` (`question`,`answer`) VALUES ";

            for (i = 0; i < trivias.length; i++) {
                inserq += " (\"" + escape(questions[i]) + "\",\"" + answers[i].toString() + "\"),";
            }

            // Removing the trailing ','
            inserq = inserq.substr(0, inserq.length - 1);

            sql.query(inserq).spread(function (result, metadata) {
                res.json({success: true})
            }).catch(function (err) {
                res.json({success: false});
            });

        }
    });


});

router.post('/', verify_token, function (req, res, next) {
    var question = req.body.question + '';
    var answer = req.body.answer + '';

    var userid = req.decoded.data;
    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?', {
        replacements: [userid],
        type: sql.QueryTypes.SELECT
    }).then(function (admin_value) {

        admin_value = admin_value[0].admin;
        if ((admin_value == 1) || (admin_value == 2)) {
            sql.query("INSERT INTO `trivia` (`question`,`answer`) VALUES (?,?)",
                {replacements: [question, answer]}).spread(function (result, metadata) {
                var affected_rows = metadata.affectedRows;
                if (affected_rows == 1)
                    res.json({success: true});
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