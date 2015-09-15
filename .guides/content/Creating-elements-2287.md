### Using HTML strings

```
document.getElementById('container').innerHTML = "<p> Hello </p>"
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

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

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").append( $('<p>').text('Hello') )
```
{Run this code}(node .guides/tests/run-this.js run10)
