"use strict";

var gutil = require("gulp-util");
var PluginError = gutil.PluginError;
var through = require("through2");

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

	
};

module.exports = gulpFontIcon;