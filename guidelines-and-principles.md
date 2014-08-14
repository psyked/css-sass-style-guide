---
title: CSS / SASS Guidelines & principles
---
<div class='row'>
<div class="large-12 columns">
{{#markdown}}
# CSS / SASS Guidelines & principles
- - -

## Keep code modular
- - -
### Use a grid
Use a grid to determine the width of your layout and the content should flow freely within the grid. The grid should be fluid (percentage) and not a fixed pixel size. Remember, <a href='http://alistapart.com/article/fluidgrids/'>target ÷ context = result</a>.

### Write code that works across your whole site
Don't tie code to a certain page, instead write your styles so that they can be used on all your pages. It is better to write `.my-cool-widget` as opposed to `.blog-page .my-cool-widget`. The first example can be re-used whereas the second can only be used on the blog page.

## Keep specificity low
- - -
- Keep specificity, this makes it easier for other developers to debug code.
- Using tags and classes, IDs should be avoided because they are highly specific.
- Don't over specify selectors, `.class-name` is better than `div.class-name`. The second example increases specificity needlessly.
- Keep your CSS only as specific as it needs to be. Something like `body .about-page .container section .content .col-1 article .cool-widget p` would be an extreme example, not only is it completely over specified, it is not modular at all, will increase CSS file size needlessly and will have a high impact on <a href='https://developers.google.com/speed/articles/reflow?hl=fr'>page reflow speed</a> (heavy use of descendant selector). A better way of writing this could be `.cool-widget p` or using a direct descendant `.cool-widget > p`.
- Avoid the use of !important, this completely messes with specificity. Using it will make mean other developers will have a much harder time overriding the code.


## Keep code light
- - -
### Frameworks
If you use a framework such as bootstrap, remove any styles you don't need. Better yet, only include the styles you need. This could save over a 100KB in CSS file size.

### Minify CSS
CSS source file downloads are part of the critical rendering path for a browser. You need to deliver your styles as effectively as possible, and that means minifying your code into a single optimised file. Minifying will strip out whitespace which leads to a smaller file and a single file will mean less HTTP requests.

### Limit the amount of fonts embedded
Embedding fonts via CSS is cool, gone are the days of limiting yourself to a small subset of "web safe" fonts. However, embeddng many fonts can have a dramatic impact on performance. If there are multiple variants of a font, consider picking out three or so variants.


## Accessibility
- - -
### Use scalable values for fonts
Use scalable values such as ems or rems. If using rems, you can add a pixel fallback for old browsers via a mixin:

    @mixin font-size($sizeValue: 1.6) {
        font-size: ($sizeValue * 10) + px;
        font-size: $sizeValue + rem;
    }

<br />
## Consider using an object oriented CSS approach
- - - 
{{/markdown}}
</div>
</div>
<div class='row'>
<div class="large-12 columns">
{{#markdown}}

Although not neccessary, OOCSS practices can make code a lot more structured, maintainable and lighter.

Consider the following CSS of three boxes. If we look at the styling, they are pretty much identical apart from the background colour.

    .box-blue {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        background: #ace;        
    }
    .box-red {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        background: #c00;        
    }
    .box-green {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        background: #aca;        
    }

<br />
A better way to write it would be to separate the common elements, in this case `padding`, `margin` and `border-radius`, then extend the existing  `.box` class. As you can see we are reducing a lot of needless CSS declarations and as a benefit our CSS file will be smaller.
    
    .box {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
    }
    .box.blue {
        background: #ace;
    }
    .box.red {
        background: #c00;
    }
    .box.red {
        background: #aca;
    }


<br />
The corresponding SASS:
    
    .box {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        &.blue {
            background: #ace;
        }
        &.red {
            background: #c00;    
        }
        &.green {
            background: #aca;    
        }
    }

- - - 
{{/markdown}}
</div>
</div>