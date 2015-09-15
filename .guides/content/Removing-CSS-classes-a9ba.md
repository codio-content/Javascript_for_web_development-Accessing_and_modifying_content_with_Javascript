
```
var x = document.getElementById("container")
if (x.classList.contains('cool')) {
  x.classList.remove('cool')
}
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>


```
if ($('#container').hasClass('cool')) {
  $('#container').removeClass('cool')
}
```
{Run this code}(node .guides/tests/run-this.js run17)