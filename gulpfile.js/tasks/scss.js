'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var CONFIG = require('../config.js');

gulp.task('scss', function(done) {
	gulp.src('./src/assets/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({
      includePaths: CONFIG.SCSS_PATHS
    }).on('error', sass.logError))
		.pipe(postcss([autoprefixer()])) // uses ".browserslistrc"
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/assets/css'));
	done();
});
