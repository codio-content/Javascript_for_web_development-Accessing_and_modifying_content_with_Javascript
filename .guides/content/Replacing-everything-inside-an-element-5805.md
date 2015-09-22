<p style="text-align:center;">This code from section 3.2: </p>

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML = my_p
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").html("<p> Hello </p>")
```
{Run this code}(node .guides/tests/run-this.js run91)

Here we use the `.html()` function of jQuery that replaces the `innerHTML` of the element.
