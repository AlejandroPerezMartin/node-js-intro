'use strict';

var setup = function(appName) {
    return function(req, res, next) {

        if (req.alreadyLogged) {
            next();
        }

        console.log(appName + ': ' + req.method + ' ' + req.url);
        req.alreadyLogged = true;
        next();
    };
}

module.exports = setup;
