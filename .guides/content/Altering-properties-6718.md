
```
var x = document.getElementById("container");
x.setAttribute('align','right')
var the_align = x.getAttribute('align')
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

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

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$("#container").attr("href","https://codio.com")
```
{Run this code}(node .guides/tests/run-this.js run14)