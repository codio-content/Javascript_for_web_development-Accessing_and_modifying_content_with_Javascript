<p style="text-align:center;">This code from section 3.10: </p>

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

The first call to `hasClass()` is optional has we could just use `removeClass` whether the element has the class or not, as jQuery will work in both ways.

The `hasClass()` function returns `true` if the element has the given class and false otherwise. Then we use `removeClass()` to remove it. 

