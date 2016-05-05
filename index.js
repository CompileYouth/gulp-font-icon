"use strict";

var duplexer = require('plexer');
var gutil = require("gulp-util");
var htmlGen = require("./lib/html-gen");
var iconfontCss = require("gulp-iconfont-css");
var svg2ttf = require('gulp-svg2ttf');
var svgicons2svgfont = require('gulp-svgicons2svgfont');
var through = require('through2');
var ttf2eot = require('gulp-ttf2eot');
var ttf2woff = require('gulp-ttf2woff');
var ttf2woff2 = require('gulp-ttf2woff2');

const PLUGIN_NAME = "gulp-font-icon";

function gulpFontIcon(options) {
    var inStream = null;
    var outStream = null;

    options = options || {};

    inStream = iconfontCss({
        fontName: options.fontName,
        targetPath: options.fontName + ".css",
        fontPath: '',
        cssClass: options.fontAlias
    });

    outStream = inStream
      .pipe(svgicons2svgfont(options))
        .pipe(svg2ttf({ clone: true }))
        .pipe(ttf2eot({ clone: true }))
        .pipe(ttf2woff({ clone: true }))
        .pipe(ttf2woff2({ clone: true }));

    inStream = duplexer({ objectMode: true }, inStream, outStream);

    return inStream;
}

module.exports = gulpFontIcon;
gulpFontIcon.htmlGen = htmlGen;
