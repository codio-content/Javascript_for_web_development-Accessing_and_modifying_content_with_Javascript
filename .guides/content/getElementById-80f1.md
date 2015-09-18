## getElementById

If the element you are trying to reach has an ID then you can quickly get it by using :

```js
document.getElementById( <search_id> )
````

Where `<search_id>` is the id of the element you want to get.

For example if your element has an id of `nav`, like the `ul` in `index.html` in the top left hand pane.

```
var the_nav = document.getElementById("nav")
```

Now that we have the element we want in a variable, we could alter it or delete it.