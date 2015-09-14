
/*
  function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function appendsToCommand(command_text) {
  var content = "<div><pre><code>"+ command_text +"</code></pre></div>";

  $("#commands").append(content)

  var objDiv = document.getElementById("commands");
  objDiv.scrollTop = objDiv.scrollHeight;
}

function runCommandReal(command_text) {
   try {
     eval(command_text)  
   } catch(e) {
     console.log("Couldnt run command")
     console.log(e)
   }
}

*/

function runCommand(command_text) {

  runCommandReal(command_text)
  //appendsToCommand(escapeHtml(command_text))

}