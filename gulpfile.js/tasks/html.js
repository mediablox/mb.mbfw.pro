'use strict';

var gulp = require('gulp');
var nunjucks = require('nunjucks');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var CONFIG = require('../config.js');

gulp.task('html', function(done) {
	gulp.src(CONFIG.HTML_PAGES)
	.pipe(data(function() {return require('../../' + CONFIG.HTML_DATA);}))
	.pipe(data(function() {return require('../../' + CONFIG.HTML_SITE_DATA);}))
	.pipe(data(function() {return require('../../' + CONFIG.HTML_POST_DATA);}))
	.pipe(data(function() {return require('../../' + CONFIG.HTML_SINGLE_POST_DATA);}))
	.pipe(data(function() {return require('../../' + CONFIG.HTML_COMMENT_DATA);}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_PRODUCT_DATA);}))
	.pipe(nunjucksRender({
		path: CONFIG.HTML_PARTIALS
	}))
	.pipe(gulp.dest(CONFIG.HTML_DIST));
	done();
});
