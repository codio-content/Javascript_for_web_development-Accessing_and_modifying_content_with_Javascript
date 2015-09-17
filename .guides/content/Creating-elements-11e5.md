### Using HTML strings

To create an element we can simply use a string of the HTML element we want. 

If we want to create a `p` element with the text `Hello` inside, we can use a string of the HTML code of it. Then we append it to the `innerHTML` property of the DOM element that should contain it. In this case we want to append it to the `div#container` (when we write this we mean the `div` which has an ID of `container`).

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML += my_p
```
{Run this code}(node .guides/tests/run-this.js run1)

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

If we want to replace everything inside our `#container` with just our `p`, we should use :

```
var my_p = "<p> I replace everything </p>"
var my_div = document.getElementById("container")
my_div.innerHTML = my_p
```
{Run this code}(node .guides/tests/run-this.js run11)

Now, it's just an `=` sign so we assign to it and replace everything instead of concatenating.

You can try running multiple time the first code above then running multiple time this one and see the difference of behaviour in the bottom left hand pane.

### Using objects

If you are feeling adventurous you can use the object oriented approach to create DOM elements with the same result as the code above :

```
var p = document.createElement("p")
p.appendChild(document.createTextNode("more content")
document.getElementById("container").appendChild(p)
```
{Run this code}(node .guides/tests/run-this.js run2)

1. We create a `p` element. 
1. We create a text node with "more content" and append it as a child to the `p`.
1. Finally we get the `#container` and append our `p` to it.
