If we want to replace everything inside our `#container` with just our `p`, we should use :

```
var my_p = "<p> I replace everything </p>"
var my_div = document.getElementById("container")
my_div.innerHTML = my_p
```
{Run this code}(bash .guides/tests/exec.sh .guides/tests/run-this.js run11)

Now, it's just an `=` sign so we assign to it and replace everything instead of concatenating.