'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('copy-main-scss', function(done) {
	gulp.src('./node_modules/mb.mbfw/setup.main.scss')
		.pipe(rename('main.scss'))
		.pipe(gulp.dest('./src/assets/scss'));
	done();
});

gulp.task('setup', gulp.series('copy-main-scss'));
