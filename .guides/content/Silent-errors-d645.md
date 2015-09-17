Because we don't want to break our page if one action doesn't work as expected, jQuery has the policy of "silent errors", it means that unless it can't do anything else, jQuery will not send errors when it can't accomplish an action.

For example if you write :

```
$("#container").removeClass('cool').removeClass('junk').
```

Even if the `#container` doesn't have the `cool` and `junk` class and so jQuery cannot actually remove them, jQuery will just go on and continue without saying anything.
