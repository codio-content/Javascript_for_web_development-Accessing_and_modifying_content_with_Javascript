Have a look at the panes on the left.

It's our clock html but without the call to setTimeout. It should work and display the time at page load time but it doesn't ... have a look at the bottom left hand pane, it's displaying `00:00:00` but why ?

Try to check the file `example1.html` in the top left hand pane. Try to understand why it doesn't work? Don't try to analyse the JS code, because it's exactly the same. 

### So why ?

The reason is simple, because we moved our `div id="clock"` AFTER the `script` tag. So when the browser loads the pages, it first gets the script tag and executes the JS code, the JS code calls `set_time` which tries to call `document.getElementById("clock")` to get our clock `div` but at that moment, the browser didn't get to that div yet and so it doesn't exist.

So, in general, we don't know for sure if when our JS code will be executed, the whole HTML page will be loaded, parsed and in memory. We don't know for sure if it will be accessible already by our JS code.

### How can we know for sure ?

We have to ask the browser to call us when it has finished loading the content of the page.

Historically we used :

```
window.onload = function() {
  //
};
```

In modern browsers, we tend to use :

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // 
});
```

The `window.onload` happens after the `DOMContentLoaded` event.

The `DOMContentLoaded` is triggered by the browser after the current document's HTML content has been parsed and added to the DOM.

This `window.onload` happens after this, when the browser has loaded all the documents referenced by the page's HTML content.

This is an extract of the network panel of a random html page.

In (1) and (2) you can see the `DOMContentLoaded` event was triggered by the browser 674 ms after the start of the page load.

The `onload` event was triggered after 2.4 s

In (3) and (4) you can see when the two events where triggered using blue and red lines in the timeline.

So in this case there is a big difference, in the example HTML pages we will do, we don't embed much medias so the difference will be smaller.

![](.guides/img/dom-vs-load.png)

For the moment let's use `DOMContentLoaded`.

{Check It!|assessment}(test-1132022136)

|||guidance

Solution :

```html
<!doctype html>
<html>
<head>
  <title>Digital clock example</title>
  <link rel="stylesheet" href="../clock/clock.css">
</head>
<body>
  
  <script>
    
    function zero_pad(num) {
      if (!num) { return "00"}
      else if (num<10) { return "0"+num }
      else { return num }
    }  
    
    function set_time() {      
      var clock_div = document.getElementById("clock")

      var current_date = new Date(); 
      var hours = zero_pad(current_date.getHours())
      var minutes = zero_pad(current_date.getMinutes())
      var seconds = zero_pad(current_date.getSeconds())

      var date_clock =  hours + ":" + minutes + ":" + seconds
      
      clock_div.innerHTML = date_clock;
    }


    document.addEventListener("DOMContentLoaded", function() {
      set_time();
    });
    
  </script>
  
  <div id="clock">
    00:00:00
  </div>
  
</body>
</html>
```

|||









