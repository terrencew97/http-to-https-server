// Redirect from http port 8080 to https port
var http = require('http');
console.log('HTTP to HTTPS server is starting...');
http.createServer(function (req, res) {
    console.log('REDIRECTING ' + req.url);
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(8080);
