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
  <li> One </li>
  <li class="selected"> Two <span>(selected)</span> </li>
  <li> Three </li>
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
