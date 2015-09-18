```
document.getElementById('container').innerHTML = "<p> Hello </p>"
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").html("<p> Hello </p>")
```
{Run this code}(node .guides/tests/run-this.js run9)

Here we use the `.html()` function of jQuery that sets the `innerHTML` of the element.
