This is the second way of altering the styles of an element.

Let's say we have this CSS class ready:

```
.cool {
  text-shadow: 0 6px 4px #33F, -3px -5px 4px #F00, 3px -5px 4px #0F0;
}
```

Then we can add it to our `#container` like this:

```
var x = document.getElementById("container");
x.classList.add("cool")
```

{Run this code}(node .guides/tests/run-this.js run7)

The `classList` property contains as its name implies, the list of all the classes of the element. Here we use the `add` function on it to add our `cool` class.