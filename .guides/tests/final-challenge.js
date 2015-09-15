var fs = require('fs');
var phantom = require('phantom');

var box_domain = process.env.CODIO_BOX_DOMAIN;
var fullurl = "http://"+ box_domain + "/final-challenge/challenge.html";
var errors = [];

//console.log(fullurl);

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      
          page.evaluate(function () { 
        
            var errors =  [];

            if ($(".username").text().length < 1) {
              errors.push("The username is not set in .username")
            }

            if ($("#container").text().indexOf("Loading ...")!= -1) {
              errors.push("You didn't empty the #container before the loop")
            }

            if ($("#container > div").length != 10) {
              errors.push("There should be 10 news div in the #container")
            }

            var cnt = 0;
            $("#containter > div").each(function(){
              cnt++

              if ( $(this).find(".author").text().length < 1 || $(this).find(".title").text().length < 1 || $(this).find("a").text().length < 1) {
                errors.push("Something is wrong with the news #"+cnt)
              }

            })

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







  
