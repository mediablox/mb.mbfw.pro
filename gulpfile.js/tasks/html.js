'use strict';

var gulp = require('gulp');
var nunjucks = require('nunjucks');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var CONFIG = require('../config.js');

gulp.task('html', function(done) {
	gulp.src(CONFIG.HTML_PAGES)
	// TODO: There is a bug stopping the data loading whilst using the variables from config.js
	.pipe(data(function() {return require('../../src/data/site.json');}))
	.pipe(data(function() {return require('../../src/data/posts.json');}))
	.pipe(data(function() {return require('../../src/data/single-post.json');}))
	.pipe(data(function() {return require('../../src/data/comments.json');}))
	.pipe(data(function() {return require('../../src/data/data.json');}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_DATA);}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_SITE_DATA);}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_POST_DATA);}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_COMMENT_DATA);}))
	// .pipe(data(function() {return require('../../' + CONFIG.HTML_PRODUCT_DATA);}))
	.pipe(nunjucksRender({
		path: CONFIG.HTML_PARTIALS
	}))
	.pipe(gulp.dest(CONFIG.HTML_DIST));
	done();
});
