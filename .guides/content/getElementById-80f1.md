## getElementById

If the element you are trying to reach has an ID then you can quickly get it by using :

```js
document.getElementById( <search_id> )
````

where `<search_id>` is the ID of the element you want to get.

For example if your element has an ID of `nav`, like the `ul` in `index.html` in the top left hand pane, you can get it using JS and assign it to a variable using the code below:

```
var the_nav = document.getElementById("nav")
```

Now that we have the element we want in a variable, we could alter it or delete it.