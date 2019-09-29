# SETTINGS

 - **Config** - Project-level configuration and feature switches.
 - **Core** - inuitcss’ core and setup settings.
 - **Global** - Project-wide variables and settings.
 - **Color** - Project-wide variables and settings.

## Config

A map of global config settings. Define any project-level configuration, feature switches, etc. in here.

### Inuit Config

You can access data in this map using the following function:

`inuit-config(<key>)`

Example usage:

`@if (inuit-config(debug) == true) { ...  }`

### Color

Define the color variables that will be used throughout the project.

 - `color-primary`
 - `color-secondary`
 - `color-cta`
 - `color-alert`
 - `color-warning`
 - `color-success`
 - `color-info`
 - `color-black`
 - `color-dark-grey`
 - `color-medium-grey`
 - `color-light-grey`
 - `color-white`

### Typography

Declare the font types that are used throughout the project.

 - `mb-font-body`
 - `mb-font-heading`

### Breakpoints

Name your breakpoints in a way that creates a ubiquitous language across team members. It will improve communication between stakeholders, designers, developers, and testers.

*Example :*

```
$mq-breakpoints: (
	mobile: 320px,
	tablet: 740px,
	desktop: 980px,
	wide: 1300px,
);
```
### Fractions

Which fractions would you like in your grid system(s)? By default, inuitcss provides you fractions of one whole, halves, thirds, quarters and fifths, e.g.:

```
 .u-1/2
 .u-2/5
 .u-3/4
 .u-2/3
```

### Ratios

A list of aspect ratios that get generated as modifier classes.

You should predefine it with only the ratios and names your project needs.

The map keys are the strings used in the generated class names, and they can follow any convention, as long as they are properly escaped strings. i.e.:
```
  $inuit-ratios: (
    "2\\:1"         : (2:1),
    "4-by-3"        : (4:3),
    "full-hd"       : (16:9),
    "card-image"    : (2:3),
    "golden-ratio"  : (1.618:1) -> non-integers are okay
  );
```

### Crops

A list of cropping ratios that get generated as modifier classes.

You should predefine it with only the ratios and names your project needs.

The map keys are the strings used in the generated class names, and they can follow any convention, as long as they are properly escaped strings. i.e.:
```
  $inuit-crops: (
    "2\\:1"         : (2:1),
    "4-by-3"        : (4:3),
    "full-hd"       : (16:9),
    "card-image"    : (2:3),
    "golden-ratio"  : (1.618:1) -> non-integers are okay
  );
```

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

**BUT BE AWARE:** This can generate a huge chunk of extra CSS, depending on the amount of breakpoints you defined. So please check your CSS’ output and filesize!


## Core

This core file sets up inuitcss’ most important setup variables. They underpin a lot of how the framework functions and should be modified and preconfigured with caution.

## Global

The global settings file contains any project-wide variables; things that need to be made available to the entire codebase.

## Color

This contains everything needed to create color based modifier classes automatically using a function.
