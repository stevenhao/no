var express = require('express');
var http = require('http');

var app = express();
var port = process.env.PORT || 4000;
var print = console.log.bind(console);
print('trying to start server.')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

// var server = require('./server');
// server.attach(app);

var httpServer = http.createServer(app);
httpServer.listen(port);
print('server started on port', port);