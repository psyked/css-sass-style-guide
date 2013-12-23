---
title: Formatting
---
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
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
{{/markdown}}
</div>
</div>