'use strict';

var gulp = require('gulp');

gulp.task('images', function(done) {
	gulp.src('./src/assets/img/**/*.*')
		.pipe(gulp.dest('./dist/assets/img'));
	done();
});

