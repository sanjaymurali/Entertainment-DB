// Route for the home page/index page

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({success: true, message: "Welcome!"});

});

module.exports = router;
