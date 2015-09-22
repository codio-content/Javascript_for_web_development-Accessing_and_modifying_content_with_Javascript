<p style="text-align:center;">This code from section 3.3: </p>

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

Here we use the `.append` function that appends at the end of the targeted element, it's the same as using "+=" on `innerHtml` as we saw before.

We also use the `.text()` which sets the text of an element, it's similar to `.html()` but it only allows us to set text, not HTML. 