var fs = require('fs');
var phantom = require('phantom');
var cssutils = require('codio-css-utils');

var fullurl = "file:///home/codio/workspace/ar-challenge-js/challenge.html";
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

          var $ps =$("p");
          
          if ($ps.length != 7) {
            errors.push("There is not the correct number of p tags in the container")
          }
          
          if ($ps.first().text().trim() != "4") {
            errors.push("The first p should have the text 4")
          }
          
          if ($ps.last().text().trim() != "10") {
            errors.push("The last p should have the text 10")
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







  
