const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql');

 

let app = express();

let urlencodedPaser = bodyParser.urlencoded({

  extended: false

});

 

const cors = require('cors');

app.use(cors());

 

app.use(express.json());

 

// DB CONNECTION

 

let connection = mysql.createConnection({

  host: "localhost",

  user: "fplrecommender_commonUser",

  password: "Australia101",

  database: 'fplrecommender_MainDataDB'

});

 

// API REQUESTS

 

app.put('/updateCost', (req, res) => {

  let sql = `CALL updatcost('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateSelectedByPercent', (req, res) => {

  let sql = `CALL updatselectedbypercent('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updatePointsPerGame', (req, res) => {

  let sql = `CALL updatpointspergame('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateStatus', (req, res) => {

  let sql = `CALL updatstatus('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updatePosition', (req, res) => {

  let sql = `CALL updatposition('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateTeam', (req, res) => {

  let sql = `CALL updatteam('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateMinutes', (req, res) => {

  let sql = `CALL updatminutes('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateTotalPoints', (req, res) => {

  let sql = `CALL updattotalpoints('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.put('/updateBonus', (req, res) => {

  let sql = `CALL updatbonus('${req.body.playerName}', '${req.body.statValue}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.delete('/delete', (req, res) => {

    res.setHeader('content-type', 'application/json');

 

    let sql = `CALL delet('${req.body.playerName}')`;

    connection.query(sql, true, (error, results, fields) => {

    if (error) {

      res.send(JSON.stringify({'Error':error}));

    }

    res.send(JSON.stringify({'Result':results[0]}));

  });

});

 

app.get('/search', (req, res) => {

  res.setHeader('content-type', 'application/json');

 

    let sql = `CALL search('${req.body.playerName}')`;

    connection.query(sql, true, (error, results, fields) => {

    if (error) {

      res.send(JSON.stringify({'Error':error}));

    }

    res.send(JSON.stringify({'Result':results[0]}));

  });

});

 

app.get('/getBest', (req, res) => {

  res.setHeader('content-type', 'application/json');

 

    let sql = `CALL getBest()`;

    connection.query(sql, true, (error, results, fields) => {

    if (error) {

      res.send(JSON.stringify({'Error':error}));

    }

    res.send(JSON.stringify({'Result':results[0]}));

  });

});

 

app.get('/fulltable', (req, res) => {

  res.setHeader('content-type', 'application/json');

 

    let sql = `CALL fulltable()`;

    connection.query(sql, true, (error, results, fields) => {

    if (error) {

      res.send(JSON.stringify({'Error':error}));

    }

    res.send(JSON.stringify({'Result':results[0]}));

  });

});

 

app.get('/getBetterthanAvg', (req, res) => {

  res.setHeader('content-type', 'application/json');

 

    let sql = `CALL getBetterthanAvg()`;

    connection.query(sql, true, (error, results, fields) => {

    if (error) {

      res.send(JSON.stringify({'Error':error}));

    }

    res.send(JSON.stringify({'Result':results[0]}));

  });

});

 

app.route('/insert').post((req, res) => {

  res.setHeader('content-type', 'application/json');

  let sql = `CALL inser('${req.body.playerName}', '${req.body.teamName}', '${req.body.position}')`;

  connection.query(sql, true, (error, results, fields) => {

  if (error) {

    res.send(JSON.stringify({'Error':error}));

  }

  res.send(JSON.stringify({'Result':results[0]}));

});

});

 

app.listen(3000);

 

module.exports = app;