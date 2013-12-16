---
title: ActiveText Demo website
---
#Background reading:
The following JavaScript Style Guidelines are drawn from many sources, but primarily from the ‘JS Winning Style’, ‘Idomatic Style manifesto’, ‘Airbnb JavaScript Style Guide’ and ‘Google JavaScript Style Guide’.

#Source Code formatting rules:
All code in any code-base should look like a single person typed it, no matter how many people contributed. If you’re joining a project for the first time and it doesn’t follow these guidelines, keep with the existing style of the code - above all else, consistency is key.

#Indentation
Indent your code with two spaces, not longer and no tabs.

#Spaces between arguments and expressions
Use sparingly and to enhance legibility, with some special exceptions for one-liners (see https://github.com/rwaldron/idiomatic.js/#spacing). No trailing whitespace on your lines, either.

    project.MyClass = function(arg1, arg2) {

#Line length & wrapping content
Max 80 characters. When wrapping, other indentation than two spaces is allowed to for example align function arguments to the position where the first function argument was.

#Semicolons
Always use semicolons at the end of lines (and don’t rely on implicit insertion.)

#Comments
Generally, your code should be self-explanatory enough to not need comments. There are always exceptions however, and for those situations:
- Single line comments above the code that is subject
- Multiline comments are good
 -End of line comments are prohibited!
 -JSDoc style is good, but requires a significant time investment
JSDoc format comments are encouraged because they integrate well with many IDEs including WebStorm, and will improve the usefulness of autocompletion. See https://developers.google.com/closure/compiler/docs/js-for-compiler and http://css.dzone.com/articles/introduction-jsdoc for more information on JSDoc.

#Quotes
Prefer single quotes (') over double quotes ("), but consistency is key. If you’re embedding a String which needs to include an ' in a string declaration escape it with a backslash, rather than swapping between single and double quotes.

#Variable declarations
Use a single var entry, and separate by commas placed at the end of the line.

#Braces & brace placement
Use opening brace on the same line, and use braces always - no shorthand code or implied block scoping.

#Blank lines
Use newlines to group logically related pieces of code.

#Naming Conventions:
You are not a human code compiler/compressor, so don't try to be one. Be clear and verbose with your variable names and prefer longer, descriptive names:

    function veryLongOperationName
    function short()

Use vocabulary like is, has, set and get:

    function isReady()
    function hasValue()
    function setName()
    function getName()

#Variables
Start first word lowercase and after that all words start with uppercase letter (Camel case):

    var foo = "";
    var fooName = "";

#Constants
Use uppercase with underscore:

    var CONSTANT = 'VALUE';
    var CONSTANT_NAME = 'VALUE';

#Functions
Start first word lowercase and after that all words start with uppercase letter (Camel case):

#Arrays
Use plural forms of the object the array contains.

    var documents = [];

#Objects and classes
Use Pascal case (every word's first letter is capitalized)

    var ThisIsObject = new Date();

#Other
Use all-lower-hyphen-css-case for multi-word filenames and config keys.

In summary:

    functionNamesLikeThis
    variableNamesLikeThis
    ClassNamesLikeThis
    EnumNamesLikeThis
    methodNamesLikeThis
    CONSTANT_VALUES_LIKE_THIS
    foo.namespaceNamesLikeThis.bar
    filenameslikethis.js

#Use a .jshintrc file
JSHint is a JavaScript syntax and style checker you can use to alert about code style issues. It integrates well into to many commonly used editors and is a nice way to enforce a common style. You can place it in the root folder of your project and JSHint-aware code editors will notice it and follow it though all code in your project.

#The “Too long, didn’t read” Style Guide:

Create a .jshintrc file with the following content, and place it in the root folder of your project, and then configure your IDE to use those settings and auto-format your code when you save or commit it.

    {
      "camelcase" : true,
      "indent": 2,
      "undef": true,
      "quotmark": "single",
      "maxlen": 80,
      "trailing": true,
      "curly": true,
      "es3": true,
      "strict": true,
      "eqeqeq": true,
      "browser": true,
      "jquery": true
    }

Use descriptive function and variable names, in the format:

    functionNamesLikeThis
    variableNamesLikeThis
    ClassNamesLikeThis
    EnumNamesLikeThis
    methodNamesLikeThis
    CONSTANT_VALUES_LIKE_THIS
    foo.namespaceNamesLikeThis.bar
    filenameslikethis.js

Use a consistent vocabulary like is, has, set and get:

    function isReady()
    function hasValue()
    function setName()
    function getName()

Use whitespace as outlined by the [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/#spacing)

Braces go on the same line, not a new line.

#JavaScript Development Best Practices:

#Compiling & minification
Always minify or compile your customer-facing code, even if it’s just simple minification with pretty-printing.

#Globals
Don’t use globals. “Global name conflicts are difficult to debug, and can cause intractable problems when two projects try to integrate. In order to make it possible to share common JavaScript code, we’ve adopted conventions to prevent collisions.”

#Be Strict
In any kind of JavaScript file it is also good to add the declaration:

    'use strict';

This will affect both JSHint and your JavaScript engine, which will become less compliant but run your JavaScript faster.

#Check for absolute equality
Use `===` and `!==` instead of `==` and `!=`. See http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/ for more information on exactly why you should do this.

#Function parameters - required & optional values
- Keep the number of parameters required by a method to a minimum
- Required parameters go first
- Optional parameters go last
- If there’s more than a single optional parameter, supply the values as an object with the optional values as parameters of that object.
