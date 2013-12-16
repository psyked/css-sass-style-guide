---
title: ActiveText Demo website
---
#JavaScript Development Best Practices:

##Compiling & minification
Always minify or compile your customer-facing code, even if it’s just simple minification with pretty-printing.

##Globals
Don’t use globals. “Global name conflicts are difficult to debug, and can cause intractable problems when two projects try to integrate. In order to make it possible to share common JavaScript code, we’ve adopted conventions to prevent collisions.”

##Be Strict
In any kind of JavaScript file it is also good to add the declaration:

    'use strict';

This will affect both JSHint and your JavaScript engine, which will become less compliant but run your JavaScript faster.

##Check for absolute equality
Use `===` and `!==` instead of `==` and `!=`. See http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/ for more information on exactly why you should do this.

##Function parameters - required & optional values
- Keep the number of parameters required by a method to a minimum
- Required parameters go first
- Optional parameters go last
- If there’s more than a single optional parameter, supply the values as an object with the optional values as parameters of that object.
