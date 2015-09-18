'use strict';

var path = require('path'),
    Datastore = require('nedb');

var db = {
    mappings: new Datastore({ filename: path.join(__dirname, 'mappings.db'), autoload: true })
};



// var data = {
//     g: 'http://google.com'
// };

var mappings = {
    get: function(alias, callback) {
        db.mappings.findOne({ alias: alias }, function(err, mapping){

            console.log(err, mapping);

            if (err || !mapping) {
                return callback(new Error('Alias not found!'));
            }

            callback(null, mapping.url);
        });
    },
    create: function(alias, url, callback) {
        db.mappings.insert({ alias: alias, url: url }, callback);
    },
    list: function (callback) {
        db.mappings.find({}).sort({ alias: 1 }).exec(callback);
    }
};

module.exports = mappings;
