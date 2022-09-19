//create a web server and display a name in it

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Aitana Toscano");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});