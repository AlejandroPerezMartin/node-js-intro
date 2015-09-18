'use strict';

var data = {
    g: 'http://google.com'
};

var mappings = {
    get: function(alias, callback) {
        if (!data[alias]) {
        	return callback(new Error('URL not found.'), undefined);
        }

        callback(null, data[alias]);
    }
};

module.exports = mappings;
