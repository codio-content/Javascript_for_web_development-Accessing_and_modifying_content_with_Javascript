## Emptying an element

```
document.getElementById("container").innerHTML = null;
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

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

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").detach()
```
{Run this code}(node .guides/tests/run-this.js run12)