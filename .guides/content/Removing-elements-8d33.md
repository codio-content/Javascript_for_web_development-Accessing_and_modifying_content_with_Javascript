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

Here we use either the `.html()` function with an empty string as parameter or the `.empty()` function directly for the same effect.


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

Here we use the `.detach()` function which removes the element from its parent, it "detaches" it from the DOM.