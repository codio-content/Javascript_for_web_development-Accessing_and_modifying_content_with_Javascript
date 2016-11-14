var fs = require('fs');
var phantom = require('phantom');

var fullurl = "file:///home/codio/workspace/introduction-dom/queryselector.html";
var errors = [];

//console.log(fullurl);

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      
          page.evaluate(function () { 
        
            var errors =  [];
            
            var my_li = document.querySelector("ul > li");
            
            if (my_li.style.color != "red"){
              errors.push("First li should have color : red");
            }
          
            return errors;


          }, function (retErrors) {

            if (!retErrors) {
              process.stdout.write("There was a problem running the test\n");
              ph.exit();
              process.exit(1);
            } else {
              if(retErrors.length <= 0 ) {
                process.stdout.write('Well done!!!\n')
                ph.exit();
                process.exit(0);
              }
              else {
                process.stdout.write(retErrors.join("\n"))
                ph.exit();
                process.exit(1);
              }
            }
            
        });
      
    });
  });
});







  
