If we want to remove a CSS class from an element. We can first check that the elements has the class with `classList.contains( .. )` and then we can remove it with `classList.remove( .. )`

Here is a concrete example, our `div#container` currently has the class `cool`, so let's remove it:


```
var x = document.getElementById("container")
if (x.classList.contains('cool')) {
  x.classList.remove('cool')
}
```

{Run this code}(node .guides/tests/run-this.js run8)