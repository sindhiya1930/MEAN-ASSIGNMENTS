var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass@word1",
  database: "store"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

      /*Create a table named "customers":*/
      var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});