<p style="text-align:center;">This code from section 3.9: </p>

```
var x = document.getElementById("container");
x.classList.add("cool")
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
$('#container').addClass('cool')
```
{Run this code}(node .guides/tests/run-this.js run16)

Here we use the `.addClass()` function to add a CSS class to the targeted element.