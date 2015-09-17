
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

Here we first use the `hasClass()` function which returns `true` if the element has the given class and false otherwise. Then we use `removeClass()` to remove it. The first call is optional has we could just use `removeClass` wether the element has the class or not, as jQuery will work in both ways.