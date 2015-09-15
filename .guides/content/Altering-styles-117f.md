### Accessing the inline style of an element

```
var x = document.getElementById("container");
x.style.color = 'red'
x.style.backgroundColor = 'blue'
x.style.fontWeight = 'bold'
x.style.border = '2px solid orange'
```
<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> No camelcase necessary with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
var x = $("#container");
x.css('color','red')
x.css('background-color','blue')
x.css('font-weight','bold')
c.css('border','2px solid orange')

//or all at once

$('#container').css({
  'color':'red',
  'background-color':'blue',
  'font-weight':'bold',
  'border':'2px solid orange'
})
```
{Run this code}(node .guides/tests/run-this.js run15)
