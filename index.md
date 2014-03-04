---
title: SASS / CSS Development Guidelines
---
<div class='row'>
</div>
<div class='row'>
    <div class='large-12 columns'>
{{#markdown}}
All you need to do is:
1. Download the latest version of the source files from Bitbucket.
2. Drop the files into your project.
3. Use it as a scaffold for your structuring your source files and use our existing collection of mixins.
{{/markdown}}
</div>
<div class='row'>
    <div class='large-12 columns'>{{md 'content/template-project.md'}}</div>
</div>
<div class='row'>
<div class='large-4 columns'>
{{#markdown}}
![CSS3](assets/HTML5_Styling_512.png)
{{/markdown}}
</div>
<div class='large-8 columns'>
{{#markdown}}
## Code Organization: Core Principles
- - -
1. Start general.
2. Move towards specifics as slowly as possible.
3. Never divide based on any external concepts.
4. Only use classes for styling, *(and keep Id's for manipulating the DOM with code.)*
5. Responsive/IE styles should go as close to the structure they affect as possible.

<a href='./code-organisation.html' class='button'>What does this mean?</a>
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
