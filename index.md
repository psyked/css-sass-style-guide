---
title: Summary
---
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
## Core Principles
We follow the SASS structure as defined by Eric Myers on his [Stack Overflow response.](http://stackoverflow.com/questions/12822810/structuring-css-sass-less-files-by-elements-by-function-and-by-media-queries/12824576#12824576)

The core principles are:
1. Start general.
2. Move towards specifics as slowly as possible.
3. Never divide based on any external concepts.
4. Only use classes for styling, *(and keep Id's for manipulating the DOM with code.)*

In addition, we say that:
- Responsive/IE styles should go as close to the structure they affect as possible.
{{/markdown}}
</div>
</div>
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
## Source Code Structure / Formatting
- - -
{{/markdown}}
</div>
</div>
<div class='row'>
<div class='large-6 columns'>
{{#markdown}}
### CSS Guidelines
- Use soft-tabs with a four space indent.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Use hex colour codes (`#000`) unless using rgba colours.
{{/markdown}}
</div>
<div class='large-6 columns'>
{{#markdown}}
    body.class-name {
        background: #ccc;
    }

    footer .large-title {
        font-size: 2em;
        line-height: 3em;
        color: #f00;
    }
{{/markdown}}
</div>
</div>
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
- - -
{{/markdown}}
</div>
</div>
<div class='row'>
<div class='large-6 columns'>
{{#markdown}}
### SASS Guidelines
- Nest your content to keep your code D.R.Y. <br/>(**D**on't **R**epeat **Y**ourself)
- Sass mixins should use **camelCase** for their names, <br/>e.g: `borderRadiusIdentical`
- CSS should be lowercase with words separated by hyphens, <br/>e.g: `.feedback-label`
- Use the project structure outlined in our [Bitbucket repository.](https://bitbucket.org/mmtdigital/mmtdigital-sass-structure)

{{/markdown}}
</div>
<div class='large-6 columns'>
{{#markdown}}
    @mixin borderRadius($topLeft: 5px, $topRight: 5px, $bottomRight: 5px, $bottomLeft: 5px) {
        -moz-border-radius: $topLeft $topRight $bottomRight $bottomLeft;
        -webkit-border-top-left-radius: $topLeft;
        -webkit-border-top-right-radius: $topRight;
        -webkit-border-bottom-right-radius: $bottomRight;
        -webkit-border-bottom-left-radius: $bottomLeft;
        border-radius: $topLeft $topRight $bottomRight $bottomLeft;
    }
{{/markdown}}
</div>
</div>
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
<a href='' class='button'>Read the full SASS / CSS formatting guidelines now.</a>
{{/markdown}}
</div>
</div>
