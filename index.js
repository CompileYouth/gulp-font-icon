"use strict";

var duplexer = require('plexer');
var svgicons2svgfont = require('gulp-svgicons2svgfont');
var svg2ttf = require('gulp-svg2ttf');
var ttf2eot = require('gulp-ttf2eot');
var ttf2woff = require('gulp-ttf2woff');
var ttf2woff2 = require('gulp-ttf2woff2');

const PLUGIN_NAME = "gulp-font-icon";

function gulpFontIcon(options) {
	// Examine type of parameters and Set default value
	if (typeof options !== "object" || Array.isArray(options)) {
		options = {};
	}
	if (typeof options.fontFamily !== "string") {
		options.fontFamily = "iconFont";
	}
	if (typeof options.fontAlias !== "string") {
		options.fontAlias = "if";
	}
	if (!Array.isArray(options.formats)) {
		options.formats = ["ttf", "eot", "woff", "woff2", "svg"];
	}

	var inStream = null;
	var outStream = null;
	var duplexStream = null;

	options = options || {};

	inStream = svgicons2svgfont(options);

	outStream = inStream
		.pipe(svg2ttf({ clone: true }))
		.pipe(ttf2eot({ clone: true }))
		.pipe(ttf2woff({ clone: true }))
		.pipe(ttf2woff2({ clone: true }));

	duplexStream = duplexer({ objectMode: true }, inStream, outStream);

	return duplexStream;
};

module.exports = gulpFontIcon;