# TOOLS
 - Font-size - A mixin which guarantees baseline-friendly line-heights.
 - Clearfix - Micro clearfix mixin.
 - Hidden - Mixin for hiding elements.
 - Sass MQ - inuitcss’ default media query manager.
 - Aliases - Redeclare long, complex variables with shorter names.

## Font-size

Generates a rem font-size (with pixel fallback) and a baseline-compatible
unitless line-height from a pixel font-size value. Basic usage is simply:
```
  @include inuit-font-size(18px);
```
You can force a specific line-height by passing it as the second argument:
```
  @include inuit-font-size(16px, 1);
```
You can also modify the line-height by increments, while staying in the
baseline grid, by setting the `$modifier` parameter. It takes a positive
or negative integer, and it will add or remove "lines" to the  generated
line-height. This is the recomended way to do it, unless you really need
an absolute value. i.e.:
```
  // add 2 lines:
  @include inuit-font-size(24px, $modifier: +2);
```

```
  // subtract 1 line:
  @include inuit-font-size(24px, $modifier: -1);
```

## Clearfix

Mixin to drop micro clearfix into a selector. Further reading:
http://www.cssmojo.com/the-very-latest-clearfix-reloaded/

```
.usage {
  @include inuit-clearfix();
}
```

## Hidden

Mixin to quickly apply accessible hiding to elements.

## Sass MQ

Foe sass-mq documentation visit the sass-mq site at:
https://github.com/sass-mq/sass-mq

## Aliases

Declare shorthand aliases to rename some of the longer variable names set by inuitcss
