'use strict';

var http = require('http'),
    mappings = require('./mappings');

var server = http.createServer(function(req, res) {
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

    /*
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    */
});

server.listen(3000, function() {
    console.log("Server started at http://localhost:3000")
});
