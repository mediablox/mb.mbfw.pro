'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var CONFIG = require('../config.js');

gulp.task('scss', function(done) {
	gulp.src(CONFIG.SCSS_SRC)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({
      includePaths: CONFIG.SCSS_DEPS
    }).on('error', sass.logError))
		.pipe(postcss([autoprefixer()])) // uses ".browserslistrc"
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(CONFIG.SCSS_DEST));
	done();
});
