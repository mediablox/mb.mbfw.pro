# UTILITIES
 - **Clearfix** - Bind our clearfix onto a utility class.
 - **Widths** - Simple width helper classes.
 - **Headings** - Reassigning our heading styles to helper classes.
 - **Spacings** - Nudge bits of the DOM around with these spacing classes.
 - **Responsive-Spacings** - Enhances the function of normal spacings for responsive usage.
 - **Print** - Reset-like styles taken from the HTML5 Boilerplate.
 - **Hide** - Helper classes to hide content.
 - **Responsive-Visibility** - Responsive helper classes to hide content.
 - **Overflow** - Control the behaviour of an element when it's content is larger than the container.
 - **Text-Align** - Helper classes to align the text content within a container.
 - **Text-Transform** - Helper classes to transform text content.

## Clearfix

Attach our clearfix mixin to a utility class.

 - `u-clearfix`

## Widths

The Mediablox framework generates a series of utility classes that give a fluid width to whichever element they’re applied, e.g.:

```
  <img src="" alt="" class="u-1/2" />
```

These classes are most commonly used in conjunction with our layout system, e.g.:

```
  <div class="o-layout__item u-1/2">
```

By default, the Mediablox framework will also generate responsive variants of each of these classes by using your Sass MQ configuration, e.g.:

```
  <div class="o-layout__item u-1/1 u-1/2@tablet u-1/3@desktop">
```

Optionally, the Mediablox framework can generate offset classes which can push and pull elements left and right by a specified amount, e.g.:

```
  <div class="o-layout__item u-2/3 u-pull-1/3">
```

This is useful for making very granular changes to the rendered order of items in a layout.

## Headings

Redefine all of our basic heading styles against utility classes so as to allow for double stranded heading hierarchy, e.g. we semantically need an H2, but we want it to be sized like an H1:

```
  <h2 class="u-h1"></h2>
```

## Spacings

Utility classes to put specific spacing values onto elements. The Mediablox framework will generate us a suite of classes like:

 - `u-margin-top`
 - `u-padding-left-large`
 - `u-margin-right-small`
 - `u-padding`
 - `u-padding-right-none`
 - `u-padding-horizontal`
 - `u-padding-vertical-small`


## Responsive-Spacings

Utility classes enhancing the normal spacing classes by adding responsiveness to them. By default, there are not responsive spacings defined. You can generate responsive spacings by adding entries to the following three Sass maps, e.g.:

```
  $inuit-responsive-spacing-directions: (
    null: null,
    bottom: bottom,
  );

  $inuit-responsive-spacing-properties: (
    "margin": "margin",
  );

  $inuit-responsive-spacing-sizes: (
    "-small": $inuit-global-spacing-unit-small,
  );
```

This would bring us the following classes:

```
  .u-margin-small@mobile {}
  .u-margin-small@tablet {}
  .u-margin-small@desktop {}
  .u-margin-small@wide {}
  .u-margin-bottom-small@mobile {}
  .u-margin-bottom-small@tablet {}
  .u-margin-bottom-small@desktop {}
  .u-margin-bottom-small@wide {}
```

You can change the generated CSS classes by further extending the Sass maps.

If you want every ‘normal’ spacing (those from `utilities.spacings`) also as a responsive version, you can just mirror the ‘normal’ spacings:

```
  $inuit-responsive-spacing-directions: $inuit-spacing-directions !default;

  $inuit-responsive-spacing-properties: $inuit-spacing-properties !default;

  $inuit-responsive-spacing-sizes: $inuit-spacing-sizes !default;
```

BUT BE AWARE: This can generate a huge chunk of extra CSS, depending on the amount of breakpoints you defined. So please check your CSS’ output and filesize!

## Print

Very crude, reset-like styles taken from the HTML5 Boilerplate:

https://github.com/h5bp/html5-boilerplate/blob/5.3.0/dist/doc/css.md#print-styles

https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css#L205-L282

## Hide

Hide only visually, but have it available for screen readers:

http://snook.ca/archives/html_and_css/hiding-content-for-accessibility

 - `u-hidden-visually`


Hide visually and from screen readers.

 - `u-hidden`

## Responsive-Visibility

## Overflow

## Text-Align

## Text-Transform
