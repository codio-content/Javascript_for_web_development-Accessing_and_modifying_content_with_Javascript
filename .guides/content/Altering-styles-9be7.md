In JS there are two main ways of changing the style of an element. The first option is to add style attributes directly to its inline "style" attribute. The second option is to add a CSS 'class' to the element and then put any style you want attached to this 'class' via CSS. In this section we will see how to use the first option.

### Accessing the inline style of an element

You access the inline style of an element by using its `style` property.

But first, you need to change the name of the CSS property that you want to acces to what's called "camelCase notation". Basically you remove any "-" in your property name and you put an uppercase letter in the word after the removed "-".

For example to access `background-color` you would use `backgroundColor`.
And to access `font-weight` you would use `fontWeight`.

Have a look below for concrete examples:

```
var x = document.getElementById("container");
x.style.color = "blue"
x.style.backgroundColor = "gray"
x.style.fontWeight = "bold"
x.style.border = "2px solid orange"
```
{Run this code}(node .guides/tests/run-this.js run6)