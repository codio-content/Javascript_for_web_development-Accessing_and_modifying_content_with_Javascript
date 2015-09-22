<p style="text-align:center;">This code from section 3.8: </p>

```
var x = document.getElementById("container");
x.style.color = 'red'
x.style.backgroundColor = 'blue'
x.style.fontWeight = 'bold'
```
<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> Becomes with Jquery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

```
var x = $("#container");
x.css('color','red')
x.css('background-color','blue')
x.css('font-weight','bold')

//or all at once

$('#container').css({
  'color':'red',
  'background-color':'blue',
  'font-weight':'bold'
})
```
{Run this code}(node .guides/tests/run-this.js run15)


Here we use the jQuery `.css()` function, You can either give it two strings as parameters and it will then set the css property given in the first parameter to the value given in the second one. Or you can pass an object as parameter as in the second example.

As you may have noticed from the jQuery example above, when using the jQuery `.css()` function, you don't need to camelCase the CSS properties as you were doing in section 3.8, you can use the normal CSS properties and jQuery will take care of the rest.
