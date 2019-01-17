const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb')
const assert = require('assert');
function findDocuments (db, callback) {
    // Get the documents collection
    const collection = db.collection('document');
    // Insert some documents
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
      });
  }

  module.exports={findDocuments}