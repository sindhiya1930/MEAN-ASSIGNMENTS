const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb')
const assert = require('assert');
function insertDocuments (db, callback) {
    // Get the documents collection
    const collection = db.collection('document');
    // Insert some documents
    collection.insertOne(
      {name:"Sinshiya",place:"Chennai"}, function(err, result) {

      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  module.exports={insertDocuments}