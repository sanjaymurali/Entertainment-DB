/**
 * Created by sanjaymurali on 11/21/16.
 */

// Routes for adding news from newsapi.org

var express = require('express');
var router = express.Router();
var sql = require('../../../database/dbconnection');
var request = require('request');
var verify_token = require('../../../database/verify-token');

// apikey for newsapi.org to get the latest entertainment News.
var apikey = 'eeccc3dc08bc4708bd73b58c5a34244a';

router.get('/', verify_token, function (req, res) {
    var userid = req.decoded.data;

    var articles = [];
    var title = [];
    var desc = [];
    var article_url = [];
    var article_img = [];
    var count = 0;

    var apiurl = "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=" + apikey;

    // To check whether the given user is admin or not.
    sql.query('select admin from user where id=?',
        {replacements: [userid], type: sql.QueryTypes.SELECT}).then(function (admin_value) {

        admin_value = admin_value[0].admin;
        if ((admin_value == 1) || (admin_value == 2)) {
            // use 'request' library to get the news articles from the newsapi.org
            request({
                url: apiurl,
                json: true
            }, function (error, response, body) {

                if (!error && response.statusCode === 200) {
                    articles = body.articles;

                    for (var i = 0; i < articles.length; i++) {
                        title[i] = articles[i].title;
                        desc[i] = articles[i].description;
                        article_url[i] = articles[i].url;
                        article_img[i] = articles[i].urlToImage;
                    }

                    // Insert multiples news into DB.
                    var inserq = "INSERT INTO `news` (`title`,`description`,`url`,`image`) VALUES ";

                    for (i = 0; i < articles.length; i++) {
                        inserq += " (\"" + title[i] + "\",'" + desc[i] + "','" + article_url[i] + "','" + article_img[i] + "'),";
                    }

                    // Remove the trailing ','
                    inserq = inserq.substr(0, inserq.length - 1);
                    sql.query(inserq).spread(function (result, metadata) {
                        res.json({success: true})
                    }).catch(function (err) {
                        res.json({success: false});
                    });

                }
                else
                    res.json({success: false})
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