'use strict';

var data = {
    g: 'http://google.com'
};

var mappings = {
    get: function(url, callback) {
        var param = url.slice(-1);

        if (!data[param]) {
        	return callback(new Error('URL not found.'), undefined);
        }

        callback(null, data[param]);
    }
};

module.exports = mappings;
