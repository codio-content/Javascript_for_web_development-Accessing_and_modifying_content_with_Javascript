In order to use Javascript in a web page we need to add it to the page in a way or another. It is very similar to CSS, either we load our JS code from inside the HTML document using `script` tags, or we reference an external JS file from the page.

## Script tags

The syntax to embed JS code directly in the HTML document is :

```
<script>

/* Put your JS code here */

</script>
```

Actually, this is the HTML5 syntax, the previous syntax was a bit longer :

```
/* HTML 4 or XHTML */
<script type="text/javascript">


</script>
```

In all the modern browsers you are welcomed to use the new shorter syntax.

In theory, you can put your JS code anywhere in the page. But there is an observed good practice to put it as the last thing inside the `<body>` tag.

The reason is that when the code is loaded before the rest of the page, it may block the loading of the actual HTML content of the page and let the user with a white page during the loading of the JS. For most short code it wouldn't be a problem but for big projects it might.

## External script files

To load an external JS file, the syntax is the same with the addition of a `src` attribute and no actual code between the opening and closing tags.

```
<script src="<url>" ></script>
```

Where `<url>` is the effective url of your JS file, for example: 

```
<script src="http://superlib.com/awesome-js-helper.js" ></script> <!-- a JS file loaded from another server -->
<script src="my-super-script.js" ></script> <!-- a JS file you coded -->
```


