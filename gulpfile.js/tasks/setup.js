'use strict';

var gulp = require('gulp');

gulp.task('copy-mbfw-scss', function(done) {
	gulp.src('./node_modules/mb.mbfw.scss/main.scss')
		.pipe(gulp.dest('./src/assets/scss'));
	gulp.src('./node_modules/mb.mbfw.scss/settings/_settings.config.scss')
		.pipe(gulp.dest('./src/assets/scss/settings'));
	done();
});

gulp.task('setup', gulp.series('copy-mbfw-scss'));
