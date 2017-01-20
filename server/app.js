// Entry into the EntertainmentDB

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var sql = require('./database/dbconnection');

var PORT = process.env.PORT || 3000; //Port to be used

var app = express(); // Initialize the app

/* Middlewears */
app.use(cors()); //to allow Cross origin requests, localhost -> entertainment.db
app.use(logger('dev'));
app.use(bodyParser.json()); // Used to help process form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static('client'));

var api = require('./api/api'); // API that returns the JSON for the various routes
app.use('/api', api);

/* Used to setup the client */
app.use('/js', express.static('/js'));
app.use('/css', express.static('/css'));
app.use('/templates', express.static('/templates'));

app.all('/*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {root: 'client'});
});

app.listen(PORT);
console.log("http://" + sql.getHost() + ":" + PORT);
module.exports = app;