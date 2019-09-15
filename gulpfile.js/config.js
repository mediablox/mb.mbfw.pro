'use strict';

module.exports = {

	// HTML PATHS
	HTML_PAGES: 'src/html/pages/**/*.{html,njk,nunjucks}',
	HTML_PARTIALS: [
		'src/html/layouts',
		'src/html/partials'
	],
	HTML_DATA: 'src/data/data.json',
	HTML_DIST: 'dist',

	// SCSS PATHS
	SCSS_SRC: 'src/assets/scss/main.scss',
	SCSS_DEST: 'dist/assets/css',
	SCSS_DEPS: [
		'node_modules/mb.mbfw.scss',
		'node_modules/inuitcss'
	],

	// JS PATHS
	JS_SRC: 'src/assets/js/main.js',
	JS_DEST: 'dist/assets/js',
};
