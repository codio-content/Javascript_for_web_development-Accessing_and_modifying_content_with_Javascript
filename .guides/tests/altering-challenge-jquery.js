var fs = require('fs');
var phantom = require('phantom');
var cssutils = require('codio-css-utils');

var box_domain = process.env.CODIO_BOX_DOMAIN;
var fullurl = "http://"+ box_domain + "/altering-challenge-jquery/challenge.html";
var jqueryurl = "http://"+ box_domain + "/.guides/dom-manip/public/js/jquery.js";
var errors = [];

//console.log(fullurl);


phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.includeJs(jqueryurl, function(){
        page.evaluate(function () { 
        
          var errors =  [];

          if (!$("#footer").hasClass("clearfix")) {
            errors.push("#footer should have a class clearfix")
          }
          
          if ($("#main").css("background-color") != "rgb(173, 216, 230)") {
            errors.push("#main should have a background-color of lightblue")
          } 
          
          if ( ($("#main").css("padding-top") != "20px") || ($("#main").css("padding-bottom") != "20px") || ($("#main").css("padding-left") != "20px") || ($("#main").css("padding-right") != "20px") ) {
            errors.push("#main should have a padding of 20px")
          } 
          
          if ( ($("#navbar").css("padding-top") != "20px") || ($("#navbar").css("padding-bottom") != "20px") || ($("#navbar").css("padding-left") != "20px") || ($("#navbar").css("padding-right") != "20px") ) {
            errors.push("#navbar should have a padding of 20px")
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







  
