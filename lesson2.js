'use strict';

var http = require('http');

var mappings = {
	g: 'http://google.com'
};

var server = http.createServer(function(req, res){
	var method = req.method,
		parameter = req.url.substring(1),
		url = req.url;
		
	/*
	res.writeHead(200, {
		'content-type': 'text/html'
	});
	*/
	
	// redirect
	if(!mappings[parameter]) {
		res.writeHead(404);
		res.write(method + ' request to ' + url);
		return res.end();
	}
	
	res.writeHead(302, {	
		location: mappings[parameter]
	});
	
	res.end();
});

server.listen(3000, function(){
	console.log("Server started at http://localhost:3000")
});
