Let's try to visualize what the DOM might look like, Let's take this HTML as an example:

```
<ul id="nav" class="big">
  <li> One </li>
  <li class="selected"> two <span>(selected)</span> </li>
  <li> Three </li>
</ul>
```

We can imagine that a simplified version of an object to represent it might look like the picture below:
![](.guides/img/illu-dol1.png)

Of course in reality, the browser adds much more informations on each node.

In the next sections we will see how to target and access the different parts of the DOM and then how to add/remove/modify them in different ways.