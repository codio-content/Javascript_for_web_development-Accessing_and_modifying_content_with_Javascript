
```
var x = document.getElementById("container");
x.setAttribute('align','right')
var the_align = x.getAttribute('align')
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").attr('align','right')
var the_align =  $("#container").attr('align')
```
{Run this code}(node .guides/tests/run-this.js run13)


And if we want to correct our link example:

```
var link = document.getElementById("mylink")
link.setAttribute("href","https://codio.com")
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").attr("href","https://codio.com")
```
{Run this code}(node .guides/tests/run-this.js run14)