<p style="text-align:center;">This code from section 3.7: </p>

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

Here we use the `.attr()` function from jQuery. When used with one parameter it will return the value of that attribute. When use with two parameters it will set the value of that attribute to the value of the second parameter.


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