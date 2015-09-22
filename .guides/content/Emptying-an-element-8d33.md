<p style="text-align:center;">This code from section 3.4: </p>

```
document.getElementById("container").innerHTML = null;
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").html("")
$("#container").empty()
```
{Run this code}(node .guides/tests/run-this.js run111)

Here we use either the `.html()` function with an empty string as parameter or the `.empty()` function directly for the same effect.