{Check It!|assessment}(test-8263195)

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
    
   var my_li = document.querySelector("ul > li");
   my_li.style.color="red";
    
  })
  
</script>
  
</body>
</html>
```

|||