'use strict';

var http = require('http'),
    connect = require('connect'),
    mappings = require('../lesson_3/mappings'),
    logger = require('./logger');

var app = connect();

app.use(logger('redirection'));

app.use(function(req, res) {
    mappings.get(req.url, function(err, mapping) {

        if (err) {
            res.writeHead(404);
            return res.end();
        }

        // redirect
        res.writeHead(302, {
            location: mapping
        });

        res.end();
    });
});

http.createServer(app).listen(3000, function() {
    console.log("Server started at http://localhost:3000")
});
