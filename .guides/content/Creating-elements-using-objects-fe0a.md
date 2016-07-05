If you are feeling adventurous you can use the object oriented approach to create DOM elements with the same result as the code above :

```
var p = document.createElement("p")
p.appendChild(document.createTextNode("more content")
document.getElementById("container").appendChild(p)
```
{Run this code}(bash .guides/tests/exec.sh .guides/tests/run-this.js run2)

1. We create a `p` element. 
1. We create a text node with "more content" and append it as a child to the `p`.
1. Finally we get the `#container` and append our `p` to it.
