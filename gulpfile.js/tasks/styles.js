'use strict';

var gulp = require('gulp');

gulp.task('styles', function(done) {
	console.log("styles:start");

	console.log("styles:done");
	done();
});

gulp.task('styles', gulp.series('styles'));
