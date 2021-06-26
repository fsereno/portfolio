"use strict;"

const http = require("http");
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, host, () => {

    var options = {
        host,
        port,
        timeout : 2000
    };

    var request = http.request(options, res => {

        if (res.statusCode == 200) {
            process.exit(0)
        } else {
            process.exit(1);
        }

    });

    request.on('error', function(err) {
        process.exit(1);
    });

    request.end();
});

server.close();