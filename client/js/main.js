// Change this URL, Note: Dont put trailing slash '/'
URL = "http://entertainment.db";

/* App Code that contains the routes and controllers for the routes */
var serverURL = URL + ":3000/api/";

var edbApp = angular.module('edb', ['ui.router', 'angularUtils.directives.dirPagination']);

edbApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true); //to remove '#!' from the routes

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/templates/index.tmpl.html',
            controller: 'mainController'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/templates/register.tmpl.html',
            controller: 'registerController'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/templates/login.tmpl.html',
            controller: 'loginController'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: '/templates/favorites.tmpl.html',
            controller: 'favoriteController'
        })
        .state('movies', {
            url: '/movies',
            templateUrl: '/templates/movies.tmpl.html',
            controller: 'moviesController'
        })
        .state('movie', {
            url: "/movie?id",
            templateUrl: '/templates/movie.tmpl.html',
            controller: 'movieController'
        })
        .state('news', {
            url: "/news",
            templateUrl: '/templates/news.tmpl.html',
            controller: 'newsController'
        })
        .state('trivia', {
            url: "/trivia",
            templateUrl: '/templates/trivia.tmpl.html',
            controller: 'triviaController'
        })
        .state('search', {
            url: "/search",
            templateUrl: '/templates/search.tmpl.html',
            controller: 'searchController'
        })
        .state('nearby', {
            url: "/nearby",
            templateUrl: '/templates/nearby.tmpl.html',
            controller: 'nearbyController'
        })
        .state('suggestions', {
            url: "/suggestions",
            templateUrl: '/templates/suggestions.tmpl.html',
            controller: 'suggestionsController'
        })
        .state('classify_genres', {
            url: "/classify_genres",
            templateUrl: '/templates/classify-genres.tmpl.html',
            controller: 'genresController'
        })
        .state('biography', {
            url: "/biography",
            templateUrl: '/templates/actor-bio.tmpl.html',
            controller: 'biographyController'
        })
        .state('citation', {
            url: "/citation",
            templateUrl: '/templates/citation.tmpl.html'
        })
        .state('adminNews', {
            url: "/admin_news",
            templateUrl: 'templates/admin/internal-news.tmpl.html',
            controller: 'adminNewsController'
        })
        .state('adminMovie', {
            url: "/admin_movie",
            templateUrl: 'templates/admin/internal-movie.tmpl.html',
            controller: 'adminMovieController'
        })
        .state('adminTrivia', {
            url: "/admin_trivia",
            templateUrl: 'templates/admin/internal-trivia.tmpl.html',
            controller: 'adminTriviaController'
        })
        .state('addActor', {
            url: "/add_actors",
            templateUrl: 'templates/admin/internal-add-actors.tmpl.html',
            controller: 'addActorsController'
        })
        .state('makeMod', {
            url: "/make_moderator",
            templateUrl: 'templates/admin/internal-make-admin.tmpl.html',
            controller: 'makeModeratorController'
        })
        .state('updateMovies', {
            url: "/updateMovies",
            templateUrl: 'templates/admin/internal-update-movies.tmpl.html',
            controller: 'updateMoviesController'
        })
        .state('updateMovie', {
            url: "/updateMovie?id",
            templateUrl: 'templates/admin/internal-update-movie.tmpl.html',
            controller: 'updateMovieController'
        })
        .state('approveComment', {
            url: "/approve_comment",
            templateUrl: 'templates/admin/internal-approve-comment.tmpl.html',
            controller: 'approveCommentController'
        });

    $urlRouterProvider.otherwise('/');
});

edbApp.controller('mainController', function ($scope, $q, urlService, $window) {
    $scope.isValidSession = true;
    $scope.isAdmin = false;
    $scope.isModerator = false;

    var userToken = localStorage.getItem('userToken');
    var userDetails = urlService.getDetails(userToken, 'profile');

    $q.all([userDetails]).then(function (details) {
        var interim_userDetails = details[0].data;
        if (interim_userDetails.success) {
            $scope.userDetails = interim_userDetails.user_details;
            $scope.isValidSession = true;
            $scope.isAdmin = interim_userDetails.admin;
            $scope.isModerator = interim_userDetails.moderator;
        }
        else
            $scope.isValidSession = false;
    });

    $scope.logout = function () {
        localStorage.removeItem('userToken');
        $window.location.href = '/index';
    };
});

edbApp.controller('registerController', function ($scope, $q, $http) {
    $scope.registerForm = {};
    $scope.successCode = false;
    $scope.errorCode = false;

    $scope.registrationSubmission = function () {

        $http({
            method: 'POST',
            url: serverURL + "register",
            data: $.param($scope.registerForm),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.successCode = true;
                $scope.errorCode = false;
                $scope.registerForm = {};
            }
            else {
                $scope.successCode = false;
                $scope.errorCode = true;
            }
        });
    };

});

edbApp.controller('loginController', function ($scope, $http, $window) {
    $scope.loginForm = {};
    $scope.loginError = false;

    $scope.loginSubmission = function () {
        $http({
            method: 'POST',
            url: serverURL + "login",
            data: $.param($scope.loginForm),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                localStorage.setItem('userToken', data.token);
                $window.location.href = '/favorites';
            }
            else
                $scope.loginError = true;
        });

    }

});


edbApp.controller('favoriteController', function ($scope, $q, $http, urlService, $stateParams) {

    var movieid = ($stateParams.id) * 1;
    var userToken = localStorage.getItem('userToken');
    var favInfo = urlService.getDetails(userToken, 'favorite');

    $scope.favAdded = false;
    $scope.nofavstoshow = false;

    /* Get fav list */
    $q.all([favInfo]).then(function (details) {
        if (details[0].data.success) {
            $scope.favInfo = details[0].data.titles;
            for (var i = 0; i < $scope.favInfo.length; i++) {
                if (movieid == $scope.favInfo[i].movieid)
                    $scope.favAdded = true;
            }
        }
        else
            $scope.nofavstoshow = true;
    });

    $scope.addToFav = function () {
        $http({
            method: 'POST',
            url: serverURL + "favorite",
            data: $.param({'movieid': movieid}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken // Token created when session was established
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.favAdded = true;
            }
            else
                $scope.favAdded = false;
        });

    };

    $scope.removeFromFav = function () {
        $http({
            method: 'POST',
            url: serverURL + "favorite",
            data: $.param({'movieid': movieid}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.favAdded = false;
            }
            else
                $scope.favAdded = true;
        });

    };

    $scope.deleteAFav = function (movieid, pos) {
        $http({
            method: 'POST',
            url: serverURL + "favorite",
            data: $.param({'movieid': movieid}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.favInfo.splice(pos, 1);
                $scope.favlength = $scope.favInfo.length;
                $scope.favAdded = false;

            }
            else
                $scope.favAdded = true;
        });
    }
});

edbApp.controller('moviesController', function ($scope, $q, urlService) {
    $scope.movies = {};

    var movies = urlService.getDetails('s', 'movie');
    $q.all([movies]).then(function (details) {
        if (details[0].data.success) {
            $scope.movies = details[0].data.movies;
        }


    });
});

edbApp.controller('movieController', function ($scope, $q, urlService, $stateParams) {
    var id = $stateParams.id;

    $scope.noid = false;
    if (id === undefined || id === null)
        $scope.noid = true;
    $scope.movie = {};

    var userToken = localStorage.getItem('userToken');
    var movie = urlService.getDetails(userToken, 'movie/' + id);

    $q.all([movie]).then(function (details) {

        if (details[0].data.success)
            $scope.movie = details[0].data.movie[0];
        else
            $scope.noid = true;
    });
});

edbApp.controller('ratingController', function ($scope, $q, urlService, $stateParams, $http) {
    $scope.ratingDetails = {};
    $scope.comment = {};
    $scope.errorCode = false;
    $scope.newCommentAdded = false;

    var count = 0;
    var movie_id = $stateParams.id;
    var userToken = localStorage.getItem('userToken');
    var ratings_for_movie = urlService.getDetails(userToken, 'show_ratings/' + movie_id);

    $q.all([ratings_for_movie]).then(function (details) {

        if (details[0].data.success) {
            $scope.ratingDetails = details[0].data.comments;
            for (var i = 0; i < $scope.ratingDetails.length; i++) {
                if (!$scope.ratingDetails[i].visibletoself && !$scope.ratingDetails[i].visibletoall) {
                    count++;
                }
            }
            $scope.noneApproved = (count === $scope.ratingDetails.length) ? true : false;
        }
        else
            $scope.noneApproved = true;

        if (userToken)
            $scope.comment = {first_name: $scope.userDetails.first_name, visibletoself: true, visibletoall: false};
    });

    /* To Add comments */
    $scope.addComment = function () {
        $http({
            method: 'POST',
            url: serverURL + "user_ratings/" + movie_id,
            data: $.param($scope.comment), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.ratingDetails.push($scope.comment);
                $scope.errorCode = false;
                $scope.noneApproved = false;
                $scope.newCommentAdded = true;
                $scope.comment = {};

            }
            else
                $scope.errorCode = true;
        });
    }
});

edbApp.controller('newsController', function ($scope, $q, urlService) {

    $scope.news = {};
    $scope.errorCode = false;

    var userToken = localStorage.getItem('userToken');
    var news = urlService.getDetails(userToken, 'news');

    $q.all([news]).then(function (details) {
        if (details[0].data.success) {
            $scope.news = details[0].data;
        }
        else
            $scope.errorCode = true;
    });

});

edbApp.controller('triviaController', function ($scope, $q, urlService) {
    $scope.trivia = {};
    $scope.errorCodeTrivia = false;
    $scope.showAnswer = false;

    var userToken = localStorage.getItem('userToken');
    var trivia = urlService.getDetails(userToken, 'trivia');

    $q.all([trivia]).then(function (details) {
        if (details[0].data.success) {
            $scope.trivia.success = details[0].data.success;
            $scope.trivia.items = details[0].data.items;

            for (var i = 0; i < details[0].data.items.length; i++) {
                $scope.trivia.items[i].question = decodeURIComponent(details[0].data.items[i].question);
                $scope.trivia.items[i].answer = (details[0].data.items[i].answer);
            }
        }
        else
            $scope.errorCodeTrivia = true;
    });

    $scope.showAnswerForQ = function () {
        $scope.showAnswer = true;
    };

    $scope.answerToggle = function (sa) {
        if (sa)
            $scope.showAnswer = false;
    };

});

edbApp.controller('searchController', function ($scope, $q, $http) {
    $scope.search = {};
    $scope.movieNames = {};

    $scope.searchMovie = function () {

        $http({
            method: 'POST',
            url: serverURL + "search",
            data: $.param($scope.search), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.errorCode = false;
                $scope.movieNames = data.movies;
            }
            else {
                $scope.errorCode = true;
            }
        });
    }


});

edbApp.controller('suggestionsController', function ($scope, $q, $http, urlService) {
    $scope.suggestions = {};
    $scope.errorCode = false;

    var userToken = localStorage.getItem('userToken');
    var suggestions = urlService.getDetails(userToken, 'suggestions');

    $q.all([suggestions]).then(function (details) {

        if (details[0].data.success) {
            $scope.suggestions = details[0].data.suggestions;
            $scope.errorCode = false
        }
        else {
            $scope.errorCode = true;
        }

    })
});

edbApp.controller('genresController', function ($scope, $q, $http, urlService) {

    $scope.allgenres = {};
    $scope.errorCode = false;
    $scope.genreselected = 'All';

    var allgenres = urlService.getDetails('s', 'classify_genres');

    $q.all([allgenres]).then(function (details) {
        if (details[0].data.success) {
            details[0].data.genres.unshift('All');

            $scope.allgenres = details[0].data.genres;
            $scope.movies = details[0].data.movie;
        }
        else
            $scope.errorCode = true;

    });

    $scope.getSpecificDetails = function (genre) {
        $http({
            method: 'POST',
            url: serverURL + "classify_genres",
            data: $.param({genre: genre}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.movies = data.movies;
            }
            else {

            }
        });

    }

});


edbApp.controller('biographyController', function ($scope, $q, $http, urlService) {

    $scope.biography = {};
    $scope.errorCode = false;

    var biography = urlService.getDetails('s', 'biography');

    $q.all([biography]).then(function (details) {
        if (details[0].data.success) {
            $scope.biography = details[0].data.bios;
        }
        else
            $scope.errorCode = true;


    })


});

edbApp.controller('adminNewsController', function ($scope, $q, $http, urlService) {

    var userToken = localStorage.getItem('userToken');

    $scope.successCode = false; // to show/hide success div
    $scope.errorCode = false; // to show/hide error div
    $scope.getNews = function () {
        var latestNews = urlService.getDetails(userToken, 'admin_news');
        $q.all([latestNews]).then(function (details) {

            if (details[0].data.success) {
                $scope.successCode = true;
                $scope.errorCode = false;
            }
            else {
                $scope.errorCode = true;
                $scope.successCode = false;
            }
        });
    };
});

edbApp.controller('adminMovieController', function ($scope, $q, $http) {
    $scope.movieName = {}; //Form Data
    var userToken = localStorage.getItem('userToken');

    $scope.successCode = false; // to show/hide success div
    $scope.errorCode = false; // to show/hide error div
    $scope.addMovie = function () {
        $http({
            method: 'POST',
            url: serverURL + "admin_movie",
            data: $.param($scope.movieName), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.successCode = true;
                $scope.errorCode = false;
                $scope.movieName = {};
            }
            else {
                $scope.successCode = false;
                $scope.errorCode = true;
            }
        });
    };
});

edbApp.controller('adminTriviaController', function ($scope, $q, $http) {
    $scope.trivia = {}; //Form Data
    var userToken = localStorage.getItem('userToken');

    $scope.successCode = false; // to show/hide success div
    $scope.errorCode = false; // to show/hide error div
    $scope.addTrivia = function () {
        $http({
            method: 'POST',
            url: serverURL + "admin_trivia",
            data: $.param($scope.trivia), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.successCode = true;
                $scope.errorCode = false;
                $scope.movieName = {};
            }
            else {
                $scope.successCode = false;
                $scope.errorCode = true;
            }
        });
    };
});

edbApp.controller('makeModeratorController', function ($scope, $q, $http, urlService) {

    var userToken = localStorage.getItem('userToken');
    var users = urlService.getDetails(userToken, 'make_admin');
    $scope.noneToShow = false;
    $scope.modBoolean = [];
    $scope.users = {};

    $q.all([users]).then(function (response) {
        var details = response[0].data;

        if (details.success) {
            $scope.users = details.users;
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].admin == 0) {
                    $scope.modBoolean[i] = false;
                }
                else if (($scope.users[i].admin == 1) || ($scope.users[i].admin == 2)) {
                    $scope.modBoolean[i] = true;
                }
                else
                    $scope.modBoolean[i] = false;
            }

        }
        else
            $scope.noneToShow = true;

    });

    $scope.successCode = false; // to show/hide success div
    $scope.errorCode = false; // to show/hide error div
    $scope.addMod = function (userid, pos) {
        $http({
            method: 'POST',
            url: serverURL + "make_admin",
            data: $.param({'userid': userid}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.modBoolean[pos] = true;
            }

            else {
                $scope.errorCode = true;
            }
        });
    };

    $scope.deleteMod = function (userid, pos) {
        $http({
            method: 'DELETE',
            url: serverURL + "make_admin",
            data: $.param({'userid': userid}), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.modBoolean[pos] = false;
            }
            else {
                $scope.errorCode = true;
            }
        });
    };
});

edbApp.controller('nearbyController', function ($scope, $q, urlService) {

    $scope.theatres = {};
    $scope.errorCode = false;

    var userToken = localStorage.getItem('userToken');
    var theatres = urlService.getDetails(userToken, 'nearby');

    $q.all([theatres]).then(function (details) {
        var theatres_server = details[0].data;

        if (theatres_server.success) {
            $scope.theatres = theatres_server.list;
        }
        else
            $scope.errorCode = true;
    })

});

edbApp.controller('updateMoviesController', function ($scope, $q, urlService) {
    //Show Movies
    $scope.movies = {};
    $scope.noneToShow = false;
    var movies = urlService.getDetails('s', 'movie');
    $q.all([movies]).then(function (details) {
        if (details[0].data.success) {
            $scope.movies = details[0].data.movies;
        }
        else
            $scope.noneToShow = true;

    });

});

edbApp.controller('updateMovieController', function ($scope, $q, $http, urlService, $stateParams) {
    // Show Movie
    var movieid = $stateParams.id;

    $scope.movie = {};
    $scope.noneToShow = false;

    var userToken = localStorage.getItem('userToken');
    var movie = urlService.getDetails(userToken, 'movie/' + movieid);

    $q.all([movie]).then(function (details) {
        if (details[0].data.success) {
            $scope.movie = details[0].data.movie[0];
        }
        else
            $scope.noneToShow = true;

    });

    //Update Movie
    $scope.errorCode = false;
    $scope.successCode = false;

    $scope.updateMovie = function () {
        var updatedMovie = $scope.movie;

        $http({
            method: 'PUT',
            url: serverURL + "admin_movie",
            data: $.param(updatedMovie), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.errorCode = false;
                $scope.successCode = true;
            }
            else {
                $scope.errorCode = true;
                $scope.successCode = false;
            }
        });

    }


});

edbApp.controller('approveCommentController', function ($scope, $q, $http, urlService) {
    // Show list of comments

    $scope.comments = {};
    $scope.errorCode = false;
    $scope.approveBoolean = [];

    var userToken = localStorage.getItem('userToken');
    var commentlist = urlService.getDetails(userToken, 'show_ratings');

    $q.all([commentlist]).then(function (details) {
        $scope.comments = details[0].data;

        for (var i = 0; i < $scope.comments.length; i++) {
            if ($scope.comments[i].approved == 0) {
                $scope.approveBoolean[i] = false;
            }
            else
                $scope.approveBoolean[i] = true;
        }

    });

    $scope.approveComment = function (userid, movieid, pos) {
        var commentData = {userid: userid, movieid: movieid};

        $http({
            method: 'PUT',
            url: serverURL + "approve_comments",
            data: $.param(commentData), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.approveBoolean[pos] = true;
            }
            else {
                $scope.errorCode = true;
            }
        });
    };

    $scope.deleteComment = function (userid, movieid, pos) {
        var commentData = {userid: userid, movieid: movieid};

        $http({
            method: 'DELETE',
            url: serverURL + "approve_comments",
            data: $.param(commentData), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.approveBoolean[pos] = false;
            }
            else {
                $scope.errorCode = true;
            }
        });
    };
});

edbApp.controller('addActorsController', function ($scope, $q, $http, urlService) {
    // Show list of comments
    $scope.actorinfo = {};
    $scope.successCode = false;
    $scope.errorCode = false;

    var userToken = localStorage.getItem('userToken');

    $scope.addActor = function (userid, movieid, pos) {
        $http({
            method: 'POST',
            url: serverURL + "add_actors",
            data: $.param($scope.actorinfo), // post form data to server
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'edb-user-token': userToken
            }
        }).then(function (response) {
            var data = response.data;
            if (data.success) {
                $scope.actorinfo = {};
                $scope.successCode = true;
                $scope.errorCode = false;
            }
            else {
                $scope.errorCode = true;
                $scope.successCode = false;
            }
        });
    };

});

edbApp.service('urlService', ['$http', function (http) {

    var getDetails = function (token, url) {
        return http({
            method: 'GET',
            url: serverURL + url,
            headers: {
                'edb-user-token': token
            }

        });
    };

    return {
        getDetails: getDetails

    };
}]);
