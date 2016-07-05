To create an element we can simply use a string of the HTML element we want. 

If we want to create a `p` element with the text `Hello` inside, we can use a string of the HTML code of it. Then we append it to the `innerHTML` property of the DOM element that should contain it. In this case we want to append it to the `div#container` (when we write this we mean the `div` which has an ID of `container`).

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML += my_p
```
{Run this code}(bash .guides/tests/exec.sh .guides/tests/run-this.js run1)

When we say we "append" it, we really mean it, you can see that we used the operator `+=` on the `innerHTML` property.

If you don't understand the meaning of: 
```
my_div.innerHTML += my_p
```

Let's just say it means exactly the same as this: 
```
my_div.innerHTML = my_div.innerHTML + p
```

So whatever was already in the `#container` stays in there and we add our `p` at the end.