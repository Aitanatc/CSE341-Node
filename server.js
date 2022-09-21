// LESSON 1 -create a web server and display a name in it

// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Aitana Toscano");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });

///////////

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');

const port = process.env.PORT || 3000;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});