'use strict';

module.exports = {

	// HTML PATHS
	HTML_PAGES: 'src/html/pages/**/*.{html,njk,nunjucks}',
	HTML_PARTIALS: [
		'src/html/layouts',
		'src/html/partials'
	],
	HTML_DATA: 'src/data/data.json',
	HTML_SITE_DATA: 'src/data/site.json',
	HTML_POST_DATA: 'src/data/posts.json',
	HTML_SINGLE_POST_DATA: 'src/data/single-post.json',
	HTML_COMMENT_DATA: 'src/data/comments.json',
	HTML_PRODUCT_DATA: 'src/data/products.json',
	HTML_DIST: 'dist',

	// SCSS PATHS
	SCSS_SRC: 'src/assets/scss/main.scss',
	SCSS_DEST: 'dist/assets/css',
	SCSS_DEPS: [
		'node_modules/mb.mbfw.components',
		'node_modules/mb.mbfw',
		'node_modules/mb.mbfw.scss',
		'node_modules/inuitcss'
	],

	// JS PATHS
	JS_SRC: [
		'node_modules/mb.mbfw/js/*.js',
		'node_modules/mb.mbfw.components/**/*.js',
		'src/assets/js/main.js'
	],
	JS_LIBS: [
		'node_modules/jquery/dist/jquery.js',
		'node_modules/scrolldir/dist/scrolldir.auto.js',
		'node_modules/what-input/dist/what-input.js'
	],
	JS_DEST: 'dist/assets/js',
};
