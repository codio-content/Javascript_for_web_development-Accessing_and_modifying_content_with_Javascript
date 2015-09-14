
accessing the html of the element

## Creating elements.

```
document.getElementById('container').innerHTML = "<p> Hello </p>"
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").html("<p> Hello </p>")
```


```
var p = document.createElement("p");
p.appendChild(document.createTextNode("Hello");
document.getElementById("container").appendChild(p);
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").append( $('<p>').text('Hello') )

// or

$("#container").append( "<p> Hello </p>" )
```




## Emptying an element

```
document.getElementById("container").innerHTML = null;
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").html("")
$("#container").empty()
```

## Removing an element

```
var x = document.getElementById("container")
x.parentNode.removeChild(c)
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").detach()
```



## Working with properties

```
var x = document.getElementById("container");
x.setAttribute('align','right')
var the_align = x.getAttribute('align')
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Becomes with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$("#container").attr('align','right')
var the_align =  $("#container").attr('align')
```



## Altering CSS


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

//or all in once

$('#container').css({
  'color':'red',
  'background-color':'blue',
  'font-weight':'bold',
  'border':'2px solid orange'
})
```


### getComputedStyle is not necessary with jQuery

```
var x = document.getElementById("container");
window.getComputedStyle(x,null).color
```

<p style="text-align:center;"> <i class="fa fa-arrow-circle-down"></i> Not necessary with jQuery <i class="fa fa-arrow-circle-down"></i> </p>

```
$('#container').css('color')
```

## Adding/Removing CSS classes

```
$('#container').addClass('selected')
$('#container').removeClass('selected')
```
