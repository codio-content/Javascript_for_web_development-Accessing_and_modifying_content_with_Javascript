<p style="text-align:center;">This code from section 3.5: </p>

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