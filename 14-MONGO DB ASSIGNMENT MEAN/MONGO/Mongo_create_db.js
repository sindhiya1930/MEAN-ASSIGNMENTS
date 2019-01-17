const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb')
const assert = require('assert');
var insert= require('./Mongo_insert_documents')
var find= require('./Mongo_find_documents')
// newdb is the new database we create
const dbName="documents";
var db=' ';
var url = "mongodb://localhost:27017/"+dbName;

// make client connect to mongo service
// Use connect method to connect to the server
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    db = client.db(dbName);
    db.createCollection("document", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");

      });
   insert.insertDocuments(db,(data)=>{
console.log(data)
  });
    
  find.findDocuments(db,(data)=>{
    console.log(data)
      });
});
