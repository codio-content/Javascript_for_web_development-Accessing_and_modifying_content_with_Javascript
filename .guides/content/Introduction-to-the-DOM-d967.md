In the previous section we saw how to use `DOMContentLoaded` event to fix our page.

`DOMContentLoaded` means that the DOM content was loaded.

## What is the DOM ?

In JS we cannot work directly with the HTML source because :

1. For JS (or any programming language) and HTML document is just a text file, with a long series of characters.

1. Anyway if we modify the source HTML document, we would have to ask the browser to reload the source afterwards.

We can and want to work directly with the browser's internal representation of the source HTML document so that the changes we make are instantly applied.

Because we don't want to know all the internal details of every different browser, there was a need to standardize the access to this live representation of the HTML document and it was called the DOM.

The DOM means Document Object Model.

It is a standardized "Object Model" to represent HTML Documents. It allows us to write JS code to modify our pages that works on all the browsers.

Basically the DOM represents the HTML content as a tree like object.

Each node represents an HTML tag and:
- the HTML and CSS properties of the tag are attached on it. 
- A node has also a list of all the HTML elements that he contains, its "children" nodes.

For this HTML :

```
<ul id="nav" class="big">
  <li> Un </li>
  <li class="selected"> Deux <span>Yes</span> </li>
  <li> Trois </li>
</ul>
```

We can imagine that a simplified version of an object to represent it might look like the picture below:
![](.guides/img/illu-dol1.png)

Of course in reality, the browser adds much more informations on each node.

In the next sections we will see how to target and access the different parts of the DOM and then how to add/remove/modify them in different ways.