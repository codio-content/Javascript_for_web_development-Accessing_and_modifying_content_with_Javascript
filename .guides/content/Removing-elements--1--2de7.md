In order to remove element, you have to find their parent container and empty its `innerHTML` property or ask the parent to remove the element as child.

### Emptying the innerHTML

In the bottom left hand preview, you will see that we have some paragraphs inside the `div#container`, the code underneath will remove all theses paragraphs at once.

```
document.getElementById("container").innerHTML = null
```

{Run this code}(node .guides/tests/run-this.js run3)
