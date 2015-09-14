var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

var command_to_run = process.argv[2]

socket.emit('run-this-request', command_to_run );

socket.on('run-this-request-done', function(msg){
    process.stdout.write('Done!');
    process.exit(0);
});








