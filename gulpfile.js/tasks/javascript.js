'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var CONFIG = require('../config.js');


gulp.task('bundle', function (done) {
	gulp.src(CONFIG.JS_SRC)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(CONFIG.JS_DEST));
	done();
});

gulp.task('libs', function (done) {
	gulp.src(CONFIG.JS_LIBS)
		.pipe(gulp.dest(CONFIG.JS_DEST));
	done();
});

gulp.task('javascript', gulp.series('bundle','libs'));
