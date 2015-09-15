In jQuery you can chain actions. When you execute an action on the jQuery object, it returns itself, so you can continue doing more actions.

For example :

```
$("#container").addClass('cool');
$("#container").removeClass('junk');
$("#container").addClass('supercool');
```

Can be written :

```
$("#container").addClass('cool').removeClass('junk').addClass('supercool');
```

