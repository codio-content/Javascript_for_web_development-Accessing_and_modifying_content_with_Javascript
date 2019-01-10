$(document).ready(function(){

  var sockethost = 'https://' + window.location.hostname + ":9500";
  var hostname = window.location.hostname.split('.', 1)[0];
  var sockethost = 'https://' + window.location.hostname.replace(hostname, hostname + "-9500");
  var socketscript = sockethost + "/socket.io/socket.io.js";

  $.getScript( socketscript , function( data, textStatus, jqxhr ) {

    var socket = io(sockethost);

    socket.on('run-this', function(msg){
      console.log("received run-this");
      runCommand(msg),
      socket.emit('run-this-done',"");
    });

  });

})