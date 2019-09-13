'use strict';

var gulp = require('gulp');
var browser = require('browser-sync');

gulp.task('serve', function(done) {
	browser.init({
		server: 'dist',
		port: 3000,
		notify: {
			styles: [
				'pointer-events: none',
				'position: fixed',
				'bottom: 10px',
				'left: 10px',
				'text-align: center',
				'background-color: rgba(24, 24, 48, 0.8)',
				'color: #fff',
				'padding: 10px',
				'border: 2px solid #fff',
				'font: 13px Menlo, Monaco, monospace',
				'border-radius: 5px',
			],
		},
	});
	done();
});

gulp.task('reload', function(done) {
  browser.reload();
  done();
});

gulp.task('watch', function(done) {
  gulp.watch('src/**/*.njk').on('all', gulp.series('html', 'reload'));
  gulp.watch('src/**/*.scss').on('all', gulp.series('scss', 'reload'));
  gulp.watch('src/**/*.js').on('all', gulp.series('javascript', 'reload'));
  done();
});
