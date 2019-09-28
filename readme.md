# mb.mbfw.pro
## Mediablox Framework Prototyping System

This is a template project for building web site prototypes using the Mediablox Framework (MBFW). This template is used to deliver static projects in blazing speed. It has a Gulp-powered build system with the following features:

- HTML templating with Nunjucks
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- JSON Datasets
- Pre-Populated with WP/Timber compatible fields
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Prerequisites

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

## Installation

To set up the template, first download it with Git:

```
git clone https://github.com/mediablox/mb.mbfw.pro.git projectname
```

Then open the folder in your command line, and install the needed dependencies:

```
cd projectname
npm install
npm run setup
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:3000
```

To create compressed, production-ready assets, run `npm run build`.

## Stack

- [HTML5BoilerPlate](https://html5boilerplate.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Mediablox Framework (MBFW)](https://github.com/mediablox/mb.mbfw)

## Mediablox Framework (MBFW)

The Mediablox Framework is a bespoke web development framework. It was developed as an in-house alternative to Bootstrap, Foundation, UI Kit etc. which have very oppinionated styles.

It started life as a form of InuitCSS by Harry Styles, which has now been adapted in as a dependency for continued updates.

The framework comprises of three core components, mbfw.scss, mbfw.js and mbfw.components.

- [mbfw.scss](https://github.com/mediablox/mb.mbfw.scss)
- [mbfw.js](https://github.com/mediablox/mb.mbfw.js)
- [mbfw.components](https://github.com/mediablox/mb.mbfw.components)

### MBFW Dependencies

- [InuitCSS](https://github.com/inuitcss/inuitcss)
- [Sass-MQ](https://github.com/sass-mq/sass-mq)
- [jQuery](https://jquery.com/)
- [jQuery-UI](https://jqueryui.com/)
- [What Input](https://ten1seven.github.io/what-input/)
- [ScrollDir](https://scrolldir.com/)

## Coding Conventions

Where possible, always try to adhere to the coding standards of the project. This may not be possible for some components, in which case you should at the very least wrap the component in container that can be specifically targetted.

### Mediablox Styleguides

- [CSS](https://github.com/mediablox/styleguides/tree/master/css)
- [JS](https://github.com/mediablox/styleguides/blob/master/js)
- [CSS in JS](https://github.com/mediablox/styleguides/blob/master/css-in-js)

### Other Styleguides

- [UI Philosophy: Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Naming Convention: B.E.M.](https://css-tricks.com/bem-101/)
- [Architecture: ITCSS](https://github.com/inuitcss/inuitcss/blob/develop/README.md#css-directory-structure)
- [Namespacing: Single prefix, architecture reflective](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

## Useful Resources

- [Google Web Fundementals](https://developers.google.com/web/fundamentals/) - Google's opinionated reference for building amazing web experiences
- [CSS Guidelines:](https://cssguidelin.es/) High-level advice and guidelines for writing sane, manageable, scalable CSS
- [Sass Guidelines:](https://sass-guidelin.es/) An opinionated styleguide for writing sane, maintainable and scalable Sass.
- [Interaction Design Foundation:](https://www.interaction-design.org/literature/)The biggest and most authoritative library of open-source UX Design resources
- [Grid by Example:](https://gridbyexample.com/) Everything you need to learn CSS Grid Layout
- [CSS-Tricks:](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) A complete guide to Flexbox
- [SVGBackgrounds.com:](https://www.svgbackgrounds.com/) Customizable SVG patterns and background designs for websites and blogs

## Authors

- Dean Morgan - Initial Work - Mediablox

See also the list of contributors who worked on this project

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
