In the top left hand pane you can see the file `index.html` and its preview underneath.

We have prepared the work for you. As you can see, we have create a `div` with a class of `clock` and we have already put some CSS styles on it for you.

Now, we are going to use JS in order to update this clock with the right time.

You can see the full code in the `index.html` file in the top left hand pane along with the preview underneath.

Let's analyse the code in details :

First, we declare and implement two function : `zero_pad` and `set_time`. Then we call our `set_time` function at the beginning.

Our `set_time` function first gets the div with id = `clock` and save it to a variable called `clock_div`:
```javascript
var clock_div = document.getElementById("clock")
```

`document.getElementById` is JS internal function to use when you want to get an HTML element based on it's id. We will see it in more details later.

Then we create a new `Date` object and by default it has the time of its creation. The `Date` object is offered by the JS standard library to work with dates and times.

```javascript
var current_date = new Date()
```

Then we use the functions `getHours`, `getMinutes` and `getSeconds` of the new `Date` object to get the Hours, Minutes and Seconds of the current time.

We apply a function called `zero_pad` on all these values. We wrote this function tp add a `0` sign at the begining if the value is < 10 so we always have two digits in our numbers in our clock display.

The next instruction creates a string by concatenating these three values and the sign ":" in between.

```javascript
var date_clock =  hours + ":" + minutes + ":" + seconds
```

The last instruction replace the inner content of the `clock_div`.
  
```javascript
clock_div.innerHTML = date_clock
```

In JS you modify or replace the "inside" of an element by assigning the content to its `innertHTML` property (We will come back to this later as well).

And voilà ! We have a function that takes the current time, formats it nicely and put it inside our `#clock` div!

Well it's all nice and it displays the time but it's not updated, it's just once at the beginning. Now, we have to use out setInterval function to call our set_time function every second.

{Check It!|assessment}(test-2591744969)

|||guidance

Solution :

```html
<!doctype html>
<html>
<head>
  <title>Digital clock example</title>
  <link rel="stylesheet" href="clock.css">
</head>
<body>
  
  <div id="clock">
    00:00:00
  </div>
  
  <script>
    
    function zero_pad(num) {
      if (!num) { return "00"}
      else if (num<10) { return "0"+num }
      else { return num }
    }  
    
    function set_time() {      
      var clock_div = document.getElementById("clock")

      var current_date = new Date()
      var hours = zero_pad(current_date.getHours())
      var minutes = zero_pad(current_date.getMinutes())
      var seconds = zero_pad(current_date.getSeconds())

      var date_clock =  hours + ":" + minutes + ":" + seconds
      
      clock_div.innerHTML = date_clock
    }


    setInterval( set_time, 1000 )
    
  </script>
</body>
</html>
```

|||


