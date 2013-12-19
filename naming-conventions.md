---
title: Naming Conventions
---
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