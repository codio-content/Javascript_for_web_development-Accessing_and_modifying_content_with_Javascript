Everytime you use jQuery you will be using the `$` sign. This sign is provided by jQuery to write short code. It is an alias of `jQuery` in this case, so everytime you see the `$` sign it is the same as writing `jQuery` in the code.

## jQuery document ready

As we saw in the previous unit, when you use JS in a page, you have to wait for the document to be fully loaded before running your JS code. jQuery provides a cross-browser way of doing it :
```
$(document).ready(function(){
  // You code goes here
})
```

Basically it means :  When the document is ready then run my code.

## Common syntax
In jQuery the logic or syntax is often the same, you write :

`$( what_you_target ).action_you_want_to_do()`

The `what_you_target` is in general a CSS selector to reach the element you want and the `action_you_want_to_do` is whatever action you want to do on it.

For example:
```
$("#container").addClass('cool');
```

This would add the CSS class `cool` to the element with id `container`.
We will see more examples and actions to do in the next sections.