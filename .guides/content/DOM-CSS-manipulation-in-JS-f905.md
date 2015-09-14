In this chapter we will see different technique to manipulate the DOM.

For all our examples below, we will use a common basic HTML page `index.html` which you can find in the top left hand pane along with its preview underneath.

This page has a `div` with ID `container` and all the examples below will work by altering this div.

When you will see a blue button saying "RUN THIS CODE", you can click on it and it will run the code displayed above it in the bottom left hand pane preview. 


## Creating elements.

### Using HTML strings

To create element we can simply use a string of the HTML element we want. 

If we want to create a `p` element with the text `Hello` inside, we can do use a string of HTML code of it. Then we append it to the `innerHTML` property of the DOM element that should contain it. In this case we want to append it to the `div` with id = "container" as we said before.

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML += my_p
```
{Run this code}(node .guides/tests/run-this.js run1)

When we say we "append" it, we really mean it, you can see that we used the operator `+=` on the `innerHTML` property.

If you don't understand the meaning of the `my_div.innerHTML += my_p`, let's just say it means exactly the same as this : `my_div.innerHTML = my_div.innerHTML + p`

So whatever was already in the `#container` stays in there and we add our at the end `p`.

If we want to replace everything inside our `#container` with just our `p`, we should write :

```
var my_p = "<p> Hello </p>"
var my_div = document.getElementById("container")
my_div.innerHTML = my_p
```
{Run this code}(node .guides/tests/run-this.js run11)

Now, it's just an `=` sign now so we assign to it and replace everything.

You can try running multiple time the first code above then running multiple time this one and see the result in the bottom left hand pane.

### Using objects

If you are feeling adventurous you can use the object oriented approach to create dom elements for the same result :

```
var p = document.createElement("p")
p.appendChild(document.createTextNode("more content")
document.getElementById("container").appendChild(p)
```
{Run this code}(node .guides/tests/run-this.js run2)

First we create a `p` element. then we create a text node "more content" and append it as a child to the `p` finally we get the `#container` and append our `p` to it.


## Removing elements

In order to remove element, you have to find their parent container and empty its innerHTML property or ask it to remove the element as child.

### Emptying the innerHTML

```
document.getElementById("container").innerHTML = null
```

{Run this code}(node .guides/tests/run-this.js run3)


### Asking their parent to remove them

```
var c = document.getElementById("container")
c.parentNode.removeChild(c)
```
{Run this code}(node .guides/tests/run-this.js run4)


## Altering properties

```
var x = document.getElementById("container")
var old_align = x.getAttribute("align")
x.setAttribute("align","right")
```
{Run this code}(node .guides/tests/run-this.js run5)


## Altering CSS

### camelCase the css properties.

### Accessing the inline style of an element

```
var x = document.getElementById("container");
x.style.color = "red"
x.style.backgroundColor = "gray"
x.style.fontWeight = "bold"
x.style.border = 2px solid orange"
```
{Run this code}(node .guides/tests/run-this.js run6)

### getComputedStyle

```
window.getComputedStyle(x,null).color
```

