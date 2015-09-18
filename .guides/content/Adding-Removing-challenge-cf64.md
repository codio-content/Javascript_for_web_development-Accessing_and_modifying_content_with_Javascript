{Check It!|assessment}(test-1609688105)

|||guidance

Solution :

```
<!DOCTYPE html>
<html>
<head>
  <title> Dom manip </title>
  <link rel="stylesheet" href="/.guides/dom-manip/public/css/style.css">
</head>
<body>
<div id="container">

</div>
<script>
  var container = document.getElementById("container");

  for (var i=1;i<=10;i++) {
    container.innerHTML+="<p>"+i+"</p>"
  }

  for (var j=1;j<=3;j++) {
    var p = document.querySelector("p")
    container.removeChild(p);
  }
</script>
</body>
</html>
```

|||
