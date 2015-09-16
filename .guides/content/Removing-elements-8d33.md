## Emptying an element

```
document.getElementById("container").innerHTML = null;
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").html("")
$("#container").empty()
```
{Run this code}(node .guides/tests/run-this.js run111)


## Removing an element

```
var x = document.getElementById("container")
x.parentNode.removeChild(c)
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").detach()
```
{Run this code}(node .guides/tests/run-this.js run12)