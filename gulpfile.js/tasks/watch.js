'use strict';

var gulp = require('gulp');

// Builds the documentation and framework files
gulp.task('watch', gulp.series('styles','javascript'));
