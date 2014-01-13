---
title: Code Organisation - Core Principles
---
<div class='row'>
<div class='large-12 columns'>
{{#markdown}}
> Our Code Organisation guidelines are lifted from [Eric Meyers' post on StackOverflow](http://stackoverflow.com/questions/12822810/structuring-css-sass-less-files-by-elements-by-function-and-by-media-queries/12824576#12824576) but are repeated here for convenience.

CSS is already a structured language. For better or worse, the order of your code changes it's meaning. Because of that, it's important that any CSS organization scheme is dictated primarily by the cascade. The other structural aspect of CSS is semantics. Use it to your advantage. The concern of organization is keeping things meaningful and maintainable. The best thing you can do to retain meaning is to show relationships. Relationships are already expressed by semantics.

Put those things together, and you end up with code organized by **specificity** first and then **semantics**, but never by external concepts such as type vs. layout or screen-size. Here's my naming scheme:

    base/
      - Sass imports and settings - no CSS output.
      - e.g _grid, _colors, _rhythm, etc.
    general/
      - Initial CSS baseline with resets, defaults, font imports, and classes to extend.
      - e.g. _reset, _root, _fonts, _icons, _defaults, etc.
    layout/
      - The rough outline of the site structure.
      - Not "layout" as a set of properties excluding type, "layout" as the overall site template which might well include typography.
      - e.g. _banner, _nav, _main, _contentinfo, etc.
    modules/
      - All the details. First by effect (classes/general), then by widget (ids/specifics).
      - e.g. _users, _admin, _product-lists etc.

**Media-queries should stay as close as possible to the code they affect.** When possible, they go directly inline (with Sass media bubbling). If that becomes bulky, they move outside the block, but *never outside the partial*. MQ's are overrides. When you override code, it is especially important that you are able to see exactly what is being overridden.

On some sites, you may take this structure farther. I've occasionally added two folders at the end: `plugins/` to manage 3rd-party code, and `overrides/` to handle unavoidable (try to avoid them!) location-specific overrides to a widget. I've also gone deeper, adding a `fonts/` folder with partials for each font family, or a `users/` folder with partials for adding, editing, viewing, etc. The specifics are flexible, but the basic organization remains the same:

- Start general.
- Move towards specifics as slowly as possible.
- **Never** divide based on any external concepts (type/layout, screen-sizes, etc).
{{/markdown}}
</div>
</div>
