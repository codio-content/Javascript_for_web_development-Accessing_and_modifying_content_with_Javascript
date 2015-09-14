function runCommand(command_text) {
  
  var code_to_run = "";

  switch(command_text) {
    case "run1":
      var my_p = "<p> Hello </p>" 
      var my_div=document.getElementById("container") 
      my_div.innerHTML +=my_p;
      
      break;
    case "run11":
      var my_p = "<p> Hello </p>" 
      var my_div=document.getElementById("container") 
      my_div.innerHTML =my_p;
      
      break
    case "run2":
      var p = document.createElement("p")
      p.appendChild(document.createTextNode("more content"))
      document.getElementById("container").appendChild(p)
      
      break
    case "run3":
      document.getElementById("container").innerHTML = null
      
      break
    case "run4":
      var c = document.getElementById("container")
      c.parentNode.removeChild(c)
      
      break
    case "run5":
      var x = document.getElementById("container")
      var old_align = x.getAttribute("align")
      x.setAttribute("align","right")
      
      break
    case "run6":
      var x = document.getElementById("container")
      x.style.color = "red"
      x.style.backgroundColor = "gray"
      x.style.fontWeight = "bold"
      x.style.border = "2px solid orange"
      
      break
  }

  runCommandReal(command_text)
}