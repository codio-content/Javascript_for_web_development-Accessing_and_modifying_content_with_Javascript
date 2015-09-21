### Accessing the inline style of an element

```
var x = document.getElementById("container");
x.style.color = 'red'
x.style.backgroundColor = 'blue'
x.style.fontWeight = 'bold'
```
<p style="text-align:center;"> <img src=".guides/img/arrow_down.png" class="arrow_down" /> No camelcase necessary with jQuery <img src=".guides/img/arrow_down.png" class="arrow_down" /> </p>

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
