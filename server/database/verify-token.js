/**
 * Created by sanjaymurali on 11/16/16.
 */

var jwt = require('jsonwebtoken');

// The token supplied by the user for session and implementing role based access is verified here!

var verify_token = function (req, res, next) {

    // check header for edb-user-token
    var token = req.headers['edb-user-token'];

    // decode token
    if (token) {

        /**
         * We create a token for the user with user's id being the data being passed
         * The secret key used is "edbsecret" for coding and decoding the token to
         * check the user's authenticity for accessing various pages.
         */
        jwt.verify(token, 'edbsecret', function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                decoded.success = true;
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // if there is no token
        return res.json({
            success: false,
            message: 'No token provided.'
        });

    }

};

module.exports = verify_token;