While using the console to understand and log what happens in your JS is a powerful tool, sometimes it's not enough, sometimes you would need more to understand what's going on in your program.

In most browers, there is a powerful JS debugger, and we will see here how to use it.

|||info

### Debugger

A *debugger* is a software program used to test and find bugs (errors) in other programs.
When a program crashes, the *debugger* show the position of the error in the target program. Most debuggers also are capable of running programs in a step-by-step mode, besides stopping on specific points (called breakpoints).

|||

### two ways of opening the debugger

There are two main ways of opening the debugger :

1. You write the statement `debugger` anywhere in your code, and when the programs comes to that particular instruction it will pause and open the debugger tool focused on that particular line. You can then use the debugger normally.

1. By opening the debugger yourself and setting what's called a "breakpoint". A breakpoint is an intentional stopping or pausing placed in a program. Basically you mark a line in the program as a "breakpoint" and then when the program runs it will pause at that place and wait for your interaction to continue.


|||info

### Adding breakpoints

In most modern debuggers you add a breakpoint by click in the gray area at the left of the line you want the debugger to pause.

You can see in step 1 below the zone where to click to set a breakpoint. 
In step 2 you can see the indication by the debugger that there is a breakpoint set at that line.

<table>


<tr>
  <th> Chrome </th> <th> Firefox </th>
</tr>

<tr>
  <td> Step 1 : Click there </td><td> &nbsp; </td>
</tr>

<tr>
  <td> <img src=".guides/img/before-breakpoint.png"> </td> <td> <img src=".guides/img/firefox-before.png"> </td>
</tr>

<tr>
  <td> Step 2 : The breakpoint is set</td><td> &nbsp; </td>
</tr>

<tr>
  <td> <img src=".guides/img/after-breakpoint.png"> </td> <td> <img src=".guides/img/firefox-after.png"> </td>
</tr>

</table>


|||


### Open the debugger

Let's try to use the debugger now. In the file `example.html` in the left hand pane, you can see that we put a `debugger` statement on line 14.

Next we will open our `example.html` file in another browser tab to debug it, when it will be done, open the developer tools, and then refresh the page. You should land directly in the debugger window.

If it doesn't work directly, you should open the debugger yourself, For example by using keyboard shorcut:

On Chrome: 
- <kbd class="light">Cmd</kbd> + <kbd class="light">Opt</kbd> + <kbd class="light">I</kbd> (on mac)
- <kbd class="light">Ctrl</kbd> + <kbd class="light">Shift</kbd> + <kbd class="light">I</kbd> (on windows)

On Firefox:

- <kbd class="light">Cmd</kbd> + <kbd class="light">Opt</kbd> + <kbd class="light">S</kbd> (on mac)
- <kbd class="light">Ctrl</kbd> + <kbd class="light">Shift</kbd> + <kbd class="light">S</kbd> (on windows)


When you are in the debugger, It will look something like this :

![](.guides/img/debugger-example.png)

- In (1) we see the code which the debugger is currently runing.
- In (2) we see a blue line, that shows us on which line the debugger is currently paused.
- In (3) we see the "Scope" panel, It's composed of 2 parts "Local" and "Global". "Local are the variables that are local to your script and global are all the variables that are globally accessible in the browser. Most of the time you will inspect local variable (your variables). Here we can see the actual value of our variables `a`, `b`, `c`. In this case we see that as we declared in our code : `a=10` and `b=20` but we also see that `c=30` which is correct as we defined it as `c = a + b`

Now you can open the example in another browser tab, then refresh to see the debugger by yourself. Click <a href="debugger/example.html" target="_blank">here</a> to do it.
When you are done debugging just close the browser tab and come back to codio.

|||info

### Attention

When you come back, if you find the codio environnment totally "frozen" and unresponsive. This is due to the debugger which is still running in background, if it's the case, just go back to the tab in which you were debugging the script and stop the debugging session or close completely the tab.

|||