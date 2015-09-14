var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

var command_to_run = process.argv[2]
var code_to_run = "";

switch(command_to_run) {
  case "run1":
    code_to_run = 'var my_p = "<p> Hello </p>" var my_div=document.getElementById("container") my_div.innerHTML +=my_p;'
    break;
  case "run11":
    code_to_run = 'var my_p = "<p> Hello </p>" var my_div=document.getElementById("container") my_div.innerHTML =my_p;'
    break;
  case "run2":
    code_to_run = 'var p = document.createElement("p")'
    code_to_run + ' p.appendChild(document.createTextNode("more content")'
    code_to_run + ' document.getElementById("container").appendChild(p)'
    break;
  case "run3":
    code_to_run = 'document.getElementById("container").innerHTML = null'
    break;
  case "run4":
    code_to_run = 'var c = document.getElementById("container")'
    code_to_run + ' c.parentNode.removeChild(c)'
    break;
}


socket.emit('run-this-request', code_to_run );

socket.on('run-this-request-done', function(msg){
    process.stdout.write('Done!');
    process.exit(0);
});








