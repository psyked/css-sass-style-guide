---
title: The “Too long, didn’t read” Style Guide
---
1. Create a **.jshintrc** file with the following content, and place it in the root folder of your project, and then configure your IDE to use those settings and auto-format your code when you save or commit it.
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
1. Use descriptive function and variable names, in the format:
    - `functionNamesLikeThis`
    - `variableNamesLikeThis`
    - `ClassNamesLikeThis`
    - `EnumNamesLikeThis`
    - `methodNamesLikeThis`
    - `CONSTANT_VALUES_LIKE_THIS`
    - `foo.namespaceNamesLikeThis.bar`
    - `filenameslikethis.js`
1. Use a consistent vocabulary like is, has, set and get:
    - `function isReady()`
    - `function hasValue()`
    - `function setName()`
    - `function getName()`
1. Use whitespace as outlined by the [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/#spacing)
1. Braces go on the same line, not a new line.