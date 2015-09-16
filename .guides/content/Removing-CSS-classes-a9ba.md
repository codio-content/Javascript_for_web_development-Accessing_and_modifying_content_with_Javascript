
```
var x = document.getElementById("container")
if (x.classList.contains('cool')) {
  x.classList.remove('cool')
}
```

<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>


```
if ($('#container').hasClass('cool')) {
  $('#container').removeClass('cool')
}
```
{Run this code}(node .guides/tests/run-this.js run17)