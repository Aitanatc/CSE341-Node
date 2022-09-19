const {MongoClient} = require('mongodb');
const { db } = require('./api/models/todolistmodels');
const connect = require('./connect');

db.contacts.find({})