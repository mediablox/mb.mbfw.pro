'use strict';

var gulp = require('gulp');

gulp.task('fonts', function(done) {
	gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
		.pipe(gulp.dest('./dist/assets/fonts'));
	done();
});

