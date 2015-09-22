function runCommand(command_text) {

  switch(command_text) {
    case "run1":
      var my_p = "<p> Hello </p>" 
      var my_div=document.getElementById("container") 
      my_div.innerHTML +=my_p;
      
      break;
    case "run11":
      var my_p = "<p> I replace everything </p>"
      var my_div = document.getElementById("container")
      my_div.innerHTML = my_p
      
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
    case "run51":
      var link = document.getElementById("mylink")
      link.setAttribute("href","https://codio.com")
      
      break
    case "run6":
      var x = document.getElementById("container");
      x.style.color = "blue"
      x.style.backgroundColor = "gray"
      x.style.fontWeight = "bold"
      x.style.border = "2px solid orange"
      
      break
    case "run7":
      var x = document.getElementById("container");
      x.classList.add("cool");
      
      break
    
    case "run8":
      var x = document.getElementById("container")
      if (x.classList.contains('cool')) {
        x.classList.remove('cool')
      }
      
      break
      
    case "run9":
      $("#container").append("<p> Hello </p>")
      
      break
      
    case "run91":
      $("#container").html("<p> Hello </p>")
      
      break
      
    case "run10":
      $("#container").append( $('<p>').text('Hello') )
      
      break
    case "run111":
      $("#container").html("")
      
      break
    case "run12":
      $("#container").detach()
      
      break
      
    case "run13":
      $("#container").attr('align','right')
      
      break
    case "run14":
      $("#container").attr("href","https://codio.com")
      
      break
      
    case "run15":
      $('#container').css({
        'color':'red',
        'background-color':'blue',
        'font-weight':'bold',
        'border':'2px solid orange'
      })
      
      break
    case "run16":
      $('#container').addClass('cool')
      
      break
    case "run17":
      if ($('#container').hasClass('cool')) {
        $('#container').removeClass('cool')
      }
      
      break
  }

}