// LESSON 1 -create a web server and display a name in it

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Aitana Toscano");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});

//LESSON 2 
// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);

// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000,
//   mongoose = require('mongoose'),
//   Task = require('./api/models/todoListModel'), //created model loading here
//   bodyParser = require('body-parser');
  
// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var routes = require('./api/routes/todoListRoutes'); //importing route
// routes(app); //register the route


// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);