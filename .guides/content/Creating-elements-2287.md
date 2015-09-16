### Using HTML strings

```
document.getElementById('container').innerHTML = "<p> Hello </p>"
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").html("<p> Hello </p>")
```
{Run this code}(node .guides/tests/run-this.js run9)



### Using objects

```
var p = document.createElement("p");
p.appendChild(document.createTextNode("Hello");
document.getElementById("container").appendChild(p);
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").append( $('<p>').text('Hello') )
```
{Run this code}(node .guides/tests/run-this.js run10)
