## getElementById

If the element you are trying to reach has an ID then you can quickly get it by using :

```js
document.getElementById( <search_id> )
````

Where `<search_id>` is the id of the element you want to get.

For example if your element has an id of `nav`, like the `ul` in `index.html` in the top left hand pane.

```
var the_nav = document.getElementById("nav")
```

Now that we have the element we want in a variable, we could alter it or delete it.


{Check It!|assessment}(test-861772564)


|||guidance

Solution :

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
  
<ul id="nav" class="big">
  <li> Un </li>
  <li class="selected"> Deux <span>Yes</span> </li>
  <li> Trois </li>
</ul>
  
<script>
  document.addEventListener("DOMContentLoaded", function(){
    
    var the_nav = document.getElementById("nav");
    the_nav.style.color="red";
    
  })
  
</script>
  
</body>
</html>
```

|||
