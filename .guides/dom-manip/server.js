var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("connection")
  
    socket.on('run-this-request', function(msg){
      console.log("received run-this-request");
      io.emit('run-this',msg);
    });

    socket.on('run-this-done', function(msg){
      console.log("received run-this-done");
      io.emit('run-this-request-done',msg);
    });
});





http.listen(9500, function(){
  console.log('listening on *:9500');
});