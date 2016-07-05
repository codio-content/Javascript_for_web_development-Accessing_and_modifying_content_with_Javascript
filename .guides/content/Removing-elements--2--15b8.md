### Asking their parent to remove them

The code below will not only remove all these paragraphs, but also the `div#container`.

```
var c = document.getElementById("container")
c.parentNode.removeChild(c)
```
{Run this code}(bash .guides/tests/exec.sh .guides/tests/run-this.js run4)


|||info

### Attention

There is a big difference between the two examples for removing an element seen on this and the previous page.
1. The first one will empty everything inside our `div#container` so it will remove everything in it but the `div#container` will still exists afterwards.
1. The second option completely removes the `div#container` from the DOM so it will not exist anymore afterwards.