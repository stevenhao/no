var express = require('express');
var http = require('http');

var app = express();
var port = process.env.PORT || 4000;
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/html/index.html');
});

// var server = require('./server');
// server.attach(app);

var httpServer = http.createServer(app);
httpServer.listen(port);