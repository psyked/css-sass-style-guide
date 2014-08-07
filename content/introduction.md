# CSS Development Guidelines
- - -
## <small>1. Adopt an </small> SCSS-first <small>approach to development.</small>
Whenever possible, we should be using SCSS as our language of choice. It keeps the curly-brackets of normal CSS (for
easier copy/paste and conversion of standard CSS code) and enhances it with support for nesting, variables and mixins.

## <small>2. Keep your source code</small> Structured & Organised.
Don't be afraid to break your CSS stylesheets into dozens of separate files. Ideally, you should have one SCSS file for
each distinct component of your website, and a single top-level `styles.scss` file that references others in the order
which they need to be imported.
[We have a SCSS Structure project to get you started on Bitbucket.](https://bitbucket.org/mmtdigital/mmtdigital-sass-structure)

## <small>3. Use</small> Semantic selectors.
You should only use classes for styling (keep Ids purely for Javascript), and you should name your elements and
selectors according to what they represent, not how they appear. This ensures that things are going to make sense in the
long term if your designs change.

Also, stick to `lowercase` and `separated-by-hyphens` for your class names - no uppercase or mixed case selectors.

## <small>4. Use </small> Mixins.
Nobody really wants to have to remember all of the cross-browser hacks that exist, and neither do you want to have to be
doing anything too repetitive in your source code. Take advantage of Mixins to keep your source code readable and lean.

## <small>5. Always, always, </small> Minify <small> on Live environments.</small>
CSS source file downloads are part of the critical rendering path for a browser. You need to deliver your styles as
effectively as possible, and that means minifying your code into a single optimised file.

## <small>6. Make your CSS</small> Modular.
Don't tie code to a certain page, instead write your styles so that they can be used on all your pages. It is better to write `.my-cool-widget` as opposed to `.blog-page .my-cool-widget`. The first example can be re-used whereas the second can only be used on the blog page.

<a href='guidelines-and-principles.html' class='button'>Read the full SASS / CSS formatting guidelines now.</a>