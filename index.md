---
title: SASS / CSS Development Guidelines
---
<div class='row'>
<div class='large-6 columns'>
{{#markdown}}
## Core Principles
We follow the SASS structure as defined by Eric Myers on his [Stack Overflow response.](http://stackoverflow.com/questions/12822810/structuring-css-sass-less-files-by-elements-by-function-and-by-media-queries/12824576#12824576)

The core principles are:
1. Start general.
2. Move towards specifics as slowly as possible.
3. Never divide based on any external concepts.

In addition, we say that:
- Responsive/IE styles should go as close to the structure they affect as possible.
{{/markdown}}
</div>
<div class='large-6 columns'>
{{#markdown}}
## SASS/CSS Formatting
- Sass mixins should be **camelCase** (no spaces, underscores or hyphens), e.g: `borderRadiusIdentical`
- CSS should be lowercase with words separated by hyphens, e.g: `.feedback-label`

*Note: Where possible only "classes" should be used for styling and "Id's" reserved for manipulating the DOM.*
{{/markdown}}
</div>
</div>
