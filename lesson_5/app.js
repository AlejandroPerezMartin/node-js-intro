'use strict';

var http = require('http'),
    path = require('path'),
    express = require('express'),
    mappings = require('./mappings'),
    logger = require('./logger');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('redirection'));

app.get('/', function(req, res) {
    res.render('index', {
        mappings: 'Hello from EJS!'
    });
});

app.get('/:alias', function(req, res) {
    mappings.get(req.params.alias, function(err, mapping) {

        if (err) {
            res.send(404);
        }

        res.redirect(mapping);
    });
});

http.createServer(app).listen(3000, function() {
    console.log("Server started at http://localhost:3000")
});
