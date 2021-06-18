"use strict;"

var http = require("http");

var options = {
    host : "localhost",
    port : "8080",
    timeout : 2000
};

var request = http.request(options, res => res.statusCode == 200
    ? process.exit(0)
    : process.exit(1));

request.on('error', function(err) {
    process.exit(1);
});

request.end();