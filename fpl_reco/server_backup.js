const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

let app = express();
let urlencodedPaser = bodyParser.urlencoded({
  extended: false
});

const cors = require('cors');
app.use(cors());

app.use(express.json());

// DB CONNECTION

var mysql = require('mysql');

var con = mysql.createConnection({
// PRIVATE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// API REQUESTS

app.post('/abc', (req, res) => {
  res.setHeader('content-type', 'text/plain');
res.send(JSON.stringify({'Name':'B'}));
});

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send(JSON.stringify({'Name':'C'}));

    let sql = `CALL getBest()`;

    con.query(sql, true, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
  });

});

app.post('/home', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send(JSON.stringify({'Name':'A'}));
});


app.listen(3000);

module.exports = app;
