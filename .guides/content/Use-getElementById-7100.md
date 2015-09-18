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
