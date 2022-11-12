"use strict;"

const http = require("http");
const host = 'localhost';
const port = 3000;

http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on port 8080