var fs = require('fs');
var phantom = require('phantom');
var cssutils = require('codio-css-utils');

var fullurl = "file:///home/codio/workspace/introduction-dom/index.html";    
var jqueryurl = "file:///home/codio/workspace/.guides/dom-manip/public/js/jquery.js";
var errors = [];

//console.log(fullurl);


phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.includeJs(jqueryurl, function(){
        page.evaluate(function () { 
        
          var errors =  [];
          
          window.myAddSquare();
          window.myAddSquare();
          
          var $squares = $("#container div.square");
          
          if ($squares.length != 2) {
            errors.push("It doesn't add the div.square as it should")
          } else {
                      
            if ($squares.first().css("background-color") == $squares.last().css("background-color")) {
              errors.push("The background-color of div.square doesn't seem random")
            }
            
          }
          
          window.myAddCircle();
          window.myAddCircle();

          
          var $circles = $("#container div.circle");
          
          if ($circles.length != 2) {
            errors.push("It doesn't add the div.circle as it should")
          } else {
              
            if ($circles.first().css("background-color") == $circles.last().css("background-color")) {
              errors.push("The background-color of div.circle doesn't seem random")
            }
            
          }


          return errors;


        }, function (retErrors) {
          
          var allerrors = retErrors.concat(errors)

          if (!allerrors) {
            process.stdout.write("There was a problem running the test");
            ph.exit();
            process.exit(1);
          } else {
            if(allerrors.length <= 0 ) {
              process.stdout.write('Well done!!!')
              ph.exit();
              process.exit(0);
            }
            else {
              process.stdout.write(allerrors.join("\n"))
              ph.exit();
              process.exit(1);
            }
          }

        });
        
      });
    });
  });
});







  
