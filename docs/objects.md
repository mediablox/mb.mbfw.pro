# OBJECTS
 - **Wrapper** - Page constraint object.
 - **Layout** - Generic layout module.
 - **Media** - Image- and text-like content side by side. The poster-child of OOCSS.
 - **Flag** - Table-layout-based advancement on the Media object.
 - **List-bare** - Lists with no bullets or indents.
 - **List-inline** - A list whose items all site in a line.
 - **Box** - Simple boxing abstraction.
 - **Block** - Image-on-top-of-text object.
 - **Ratio** - A container for maintaining aspect ratio of content.
 - **Crop** - Provide a cropping context for media (images, etc.).
 - **Table** - Classes for manipulating `table`s.
 - **Pack** - Pack items into available horizontal space.

## Wrapper

Page-level constraining and wrapping elements.

## Layout

### Grid-like layout system.

The layout object provides us with a page layout system including header, footer and sidebars, for example:

```
  <body class="o-layout">
    <div class="o-layout__header>
    </div>
    <div class="o-layout__body">
	    <div class="o-layout__main">
	    </div>
			<div class="o-layout__sidebar o-layout__sidebar--left">
	    </div>
			<div class="o-layout__sidebar o-layout__sidebar--right">
	    </div>
    </div>
    <div class="o-layout__footer>
    </div>
  </div>
```

The above will create a three-column structure in which each sidebar will maintain a static width with the main section filling the remaing space. The layout is responsive and will move sidebars to below main section at smaller widths.

## Flex

Flex based grid-like layout system.

The flex object provides us with a column-style layout system. This file contains the basic structural elements, but classes should be complemented with width utilities, for example:

```
  <div class="o-flex">
    <div class="o-flex__item u-1/2">
    </div>
    <div class="o-flex__item u-1/2">
    </div>
  </div>
```

The above will create a two-column structure in which each column will fluidly fill half of the width of the parent. We can have more complex systems:

```
  <div class="o-flex">
    <div class="o-flex__item u-1/1 u-1/3@medium">
    </div>
    <div class="o-flex__item u-1/2 u-1/3@medium">
    </div>
    <div class="o-flex__item u-1/2 u-1/3@medium">
    </div>
  </div>
```

The above will create a system in which the first item will be 100% width until we enter our medium breakpoint, when it will become 33.333% width. The second and third items will be 50% of their parent, until they also become 33.333% width at the medium breakpoint.

### Directional Modifier Classes

We can also manipulate entire layout systems by adding a series of modifiers to the `.o-flex` block. For example:

```
  <div class="o-flex o-flex--[row-reverse|column|column-reverse]">
```

`o-flex--row-reverse` will reverse the displayed order of the system so that it runs in the opposite order to our source, effectively flipping the system over.

`o-flex--column` will change the direction so that the elements are stacked atop of each other in a single column.

`o-flex--column-reverse` is a combination of both `o-flex--row-reverse` and `o-flex--column` which stacks the items in a singular column, but in reverse order.

#### Wrapper Modifier Classes

By default, `o-flex__item`'s will stay in a single row. If the width of the items is greater than the size of the container, they will forceably increase the size of the container. However, you can apply `o-flex--wrap` or `o-flex--wrap-reverse`.

```
  <div class="o-flex o-flex--[wrap|wrap-reverse]">
```

### Layout Modifier Classes

You can also control the layout behaviour of the container using the following modifier classes.

```
  <div class="o-flex o-flex--[start|end|center|space-between|space-around|space-evenly]">
```

- `start` - (default) Items are packed toward the start of the flex-direction.
- `end` - Items are packed toward the end of the flex-direction.
- `center` - Items are centered along the line.
- `space-between` - Items are evenly distributed in the line; first item is on the start line, last item on the end line.
- `space-around` - Items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- `space-evenly` - Items are distributed so that the spacing between any two items (and the space to the edges) is equal.

```
  <div class="o-flex o-flex--[top|bottom|middle|stretch|baseline]">
```

 - `top` - Items are placed at the start of the cross axis.
 - `bottom` - Items are placed at the end of the cross axis.
 - `middle` - Items are centered in the cross-axis
 - `stretch` - Items are stretched to fill the container
 - `baseline` - Items are aligned such as their baselines align

### Flex Item Modifier Classes

There are also some modifier classes available to flex items. Let's take a look at some of these below;

##### Grow / Shrink Modifier Classes

 - `grow` - 
 - `grow-x2` - 
 - `grow-x3` - 
 - `shrink` - 
 - `shrink-x2` - 
 - `shrink-x3` - 

##### Alignment Modifier Classes

 - `align-start` - 
 - `align-end` - 
 - `align-center` - 
 - `align-baseline` - 
 - `align-stretch` - 

## Media

Place any image- and text-like content side-by-side, as per:
http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code

Example:

```
<div class="o-media">
	<div class="o-media__img">
		<img src="path-to-img.png">
	</div>
	<div class="o-media__body">
		Text to run aside the image.
	</div>
</div>
```

## Flag

The flag object is a design pattern similar to the media object, however it utilises `display: table[-cell];` to give us control over the vertical alignments of the text and image.

http://csswizardry.com/2013/05/the-flag-object/

```
<div class="o-flag">
	<div class="o-flag__img">
		<img src="path-to-img.png">
	</div>
	<div class="o-flag__body">
		Text to run aside the image.
	</div>
</div>
```

The `flag` object also has a selection of modifier classes available. These are as follows;

##### Size Variants

 - `o-flag--flush` - Zero padding or margins between the flag and body.
 - `o-flag--tiny` - Tiny  padding or margins between the flag and body.
 - `o-flag--small` - Small  padding or margins between the flag and body.
 - `o-flag--large` - Large padding or margins between the flag and body.
 - `o-flag--huge` - Huge padding or margins between the flag and body.

##### Alignent Variants

 - `o-flag--top` - Vertically align the image- and body-content from the top.
 - `o-flag--bottom` - Vertically align the image- and body-content from the bottom.

##### Directional Variants

 - `o-flag--reverse` - Swap the rendered direction of the object.

## List-bare

Strip list-like appearance from lists by removing their bullets and any indentation.

Note: Declaring the item class might not be necessary everywhere, but is for example in `<dl>` lists for the `<dd>` children.

Example:

```
<ul class="o-list-bare">
	<li class="o-list-bare__item"></li>
	<li class="o-list-bare__item"></li>
	<li class="o-list-bare__item"></li>
</ul>
```

## List-inline

The list-inline object simply displays a list of items in one line.

Example:

```
<ul class="o-list-bare">
	<li class="o-list-bare__item"></li>
	<li class="o-list-bare__item"></li>
	<li class="o-list-bare__item"></li>
</ul>
```

## Box

The box object simply boxes off content. Extend with cosmetic styles in the Components layer.

## Block

Stacked image-with-text object. A simple abstraction to cover a very commonly occurring design pattern.

## Ratio

Create ratio-bound content blocks, to keep media (e.g. images, videos) in their correct aspect ratios.

http://alistapart.com/article/creating-intrinsic-ratios-for-video

 - Default is a 1:1 ratio (i.e. a perfect square).

```
<div class="o-ratio">
	<div class="o-ratio__content">
	</div>
</div>
```

There are also a series of ratio modifier classes that are automatically generated based on the settings defined on `_settings.config.scss` which can be used like so:

```
<div class="o-ratio o-ratio--golden-ratio">
```

In addition to these, there is one final modifier which is for use with image content which constrains the image to the boundaries, without cropping or stretching it.

```
<div class="o-ratio o-ratio--img-contain">
```

## Crop

Provide a cropping container in order to display media (usually images) cropped to certain ratios.

Example:

```
<div class="o-crop">
	<div class="o-crop__content">
	</div>
</div>
```

Using additional modifiers we can control the behaviour of the cropping;

 - `--left-top`
 - `--left-center`
 - `--left-bottom`
 - `--right-top`
 - `--right-center`
 - `--right-bottom`
 - `--center-top`
 - `--center`
 - `--center-center`
 - `--center-bottom`

A final modifier is available to stretch content to fill it's container while maintaining aspect-ratio.

```
<div class="o-crop o-crop--fill">
```

## Table

A simple object for manipulating the structure of HTML `table`s.

```
<table class="o-table">
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
```

### Equal-width table cells

`o-table--fixed` forces all cells within a table to occupy the same width as each other. This also has performance benefits: because the browser does not need to (re)calculate cell dimensions based on content it discovers, the table can be rendered very quickly. Further reading:

https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout#Values

### Size Variants

 - `o-table--tiny`
 - `o-table--small`
 - `o-table--large`
 - `o-table--huge`

## Pack

The pack object simply causes any number of elements pack up horizontally to automatically fill an equal, fluid width of their parent.

```
<div class="o-pack">
	<div class="o-pack__item"></div>
	<div class="o-pack__item"></div>
</div>
```

### Vertical Alignment Modifiers

 - `o-pack--middle`
 - `o-pack--bottom`

### Unequal-width items

 - `o-pack--auto`

### Size Variants

 - `o-pack--tiny`
 - `o-pack--small`
 - `o-pack--default`
 - `o-pack--large`
 - `o-pack--huge`

### Reversed order packs

 - `o-pack--reverse`
