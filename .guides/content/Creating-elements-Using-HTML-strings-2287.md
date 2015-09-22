<p style="text-align:center;">This code from section 3.1: </p>

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML += my_p
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").append("<p> Hello </p>")
```
{Run this code}(node .guides/tests/run-this.js run9)

Here we use the `.append()` function of jQuery that appends to the `innerHTML` of the element.
