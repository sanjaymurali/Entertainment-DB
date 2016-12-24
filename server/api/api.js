/**
 * Created by sanjaymurali on 11/19/16.
 */

var api = require('express').Router();

/* Routes for the App */
var register = require('./routes/register');
var login = require('./routes/login');
var routes = require('./routes/index');
var profile = require('./routes/profile');
var favorite = require('./routes/favorite');
var movie = require('./routes/movie');
var user_ratings = require('./routes/user_ratings');
var news = require('./routes/news');
var trivia = require('./routes/trivia');
var search = require('./routes/search');
var theatres_nearby = require('./routes/theatres_nearby');
var suggestions = require('./routes/suggestions');
var classify_genres = require('./routes/classify_genres');
var biography = require('./routes/biography');
// Admin routes
var admin_movie = require('./routes/internal/movie');
var admin_news = require('./routes/internal/news');
var admin_trivia = require('./routes/internal/trivia');
var make_admin = require('./routes/internal/make_admin');
var show_ratings = require('./routes/internal/show_ratings');
var approve_comments = require('./routes/internal/approve_comments');
var add_actors = require('./routes/internal/add_actors');

/* Map the routes */
api.use('/', routes);
api.use('/profile', profile);
api.use('/login', login);
api.use('/movie', movie);
api.use('/register', register);
api.use('/favorite', favorite);
api.use('/user_ratings', user_ratings);
api.use('/news', news);
api.use('/trivia', trivia);
api.use('/search', search);
api.use('/nearby', theatres_nearby);
api.use('/suggestions', suggestions);
api.use('/classify_genres', classify_genres);
api.use('/biography', biography);

api.use('/admin_movie', admin_movie);
api.use('/admin_news', admin_news);
api.use('/admin_trivia', admin_trivia);
api.use('/make_admin', make_admin);
api.use('/show_ratings', show_ratings);
api.use('/approve_comments', approve_comments);
api.use('/add_actors', add_actors);


module.exports = api;