There are basically two options for using jQuery. Either you download the jQuery script, put it on your server and load it from there. Or you can use the hosted version that they offer directly. In this section and the next one, we will explain you how to do it. You are not asked to do it yourself in this unit and it will be done for you when it's necessary.

The option to download it on your server is safer, as you never know what jQuery will become and if they will continue offering a hosted version. But the second option should be quicker as they offer a CDN hosted version. A CDN means Content Distribution Network, which implies that they have servers everywhere in the world so a user downloading the file will always get a very close and fast server.

### Option 1 : from your server

First you need to download jQuery from here : https://jquery.com/download/
We recommend downloading the latest version of jQuery 1.x (The only difference between jQuery 1.x and jQuery 2.x is that the 2.x doesn't support Internet explore 6,7,8 while the 1.x still does. Otherwise they offer the same functionality.)

Then place it next to your HTML page and reference it in your page.

For example, at the time of writing, the latest 1.x version can de downloaded from : http://code.jquery.com/jquery-1.11.3.min.js

Then you reference it in your HTML like this :

```
<script src="jquery-1.11.3.min.js"></script>
```

