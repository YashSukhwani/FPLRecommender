const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

let app = express();
let urlencodedPaser = bodyParser.urlencoded({
  extended: false
});

app.post('/index', urlencodedPaser, (req, res) => {
  console.log(req.body);
  res.render('index-submit', {
    data: req.body
  });
});

const cors = require('cors');
app.use(cors());

app.use(express.json());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "commonUser",
  password: "Australia101"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// const studentRouter = require('./routes/authStudents');
// app.use('/students', studentRouter);

// const authRoute = require('./routes/authCounselors');
// app.use('/counselors', authRoute);

// const dataRoute = require('./routes/studentData');
// app.use('/api/data', dataRoute);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);

module.exports = app;
// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "commonUser",
//   password: "Australia101"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.get('/p', function (req, res) {
//  return res.send('pong');
// });

// app.post('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.delete('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });

// app.listen(process.env.PORT || 8080);

