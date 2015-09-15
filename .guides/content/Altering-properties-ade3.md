With this code you can get and change the HTML attributes of elements.

In the example below we will work with the HTML `align` property. First we get the current value of it and assign it to a variable called `old_align` then we assign a value of `right` to the `align` property of our `div#container`.

```
var x = document.getElementById("container")
var old_align = x.getAttribute("align")
x.setAttribute("align","right")
```
{Run this code}(node .guides/tests/run-this.js run5)


In the last line of our preview, we have a link, if you try to click it, it will not do anything. The reason is that there is no valid `href` attribute on it for the moment.

We can use the following code to add a valid `href` to it, for example : `https://codio.com`.

```
var link = document.getElementById("mylink")
link.setAttribute("href","https://codio.com")
```
{Run this code}(node .guides/tests/run-this.js run51)

Now that you have added an `href` on our link using JS, try to click it!
