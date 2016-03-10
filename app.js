'use strict';

const PORT = 8000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-Parser');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));
app.use(express.static('./'));


app.post('/app', function (req, res) {
  var bank = req.body;
  console.log(bank);
  fs.readFile('app.json', function (err, data){
      var alpha = JSON.parse(data);
      alpha.push(bank);
        fs.writeFile('app.json', JSON.stringify(alpha), function (err) {
          console.log('just');
          res.send();
        })
      });
  });

app.get('/',function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/app', function (req, res) {
    fs.readFile('./app.json', function(err, data) {
      // if(!data) = [];
      if(!data) data = [];
    var banks = JSON.parse(data);
    console.log(banks);
    res.send(banks);

  });
});

var server = http.createServer(app);

server.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});
