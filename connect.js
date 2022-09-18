// //create a web server and display a name in it

// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Aitana Toscano");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });

// const { MongoClient } = require('mongodb');
// //////

// const dotenv = require("dotenv");
// dotenv.config();

// async function main(){

//     const uri = 
//     "mongodb+srv://"
//     + process.env.DB_USERNAME
//     + ":"
//     + process.env.DB_PASSWORD
//     + "@clusterat.ybkxaou.mongodb.net/?retryWrites=true&w=majority";

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect(); 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};