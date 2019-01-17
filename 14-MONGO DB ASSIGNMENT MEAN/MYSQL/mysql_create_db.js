var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass@word1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    /*Create a database named "mydb":*/
    con.query("CREATE DATABASE Store", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });

});
