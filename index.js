"use strict";

var iconfontCss = require("gulp-iconfont-css");
var gutil = require("gulp-util");
var duplexer = require('plexer');
var svgicons2svgfont = require('gulp-svgicons2svgfont');
var svg2ttf = require('gulp-svg2ttf');
var through = require('through2');
var ttf2eot = require('gulp-ttf2eot');
var ttf2woff = require('gulp-ttf2woff');
var ttf2woff2 = require('gulp-ttf2woff2');
var htmlGen = require("./lib/html-gen");

const PLUGIN_NAME = "gulp-font-icon";

function gulpFontIcon(options) {
  var inStream = null;
  var outStream = null;
  var duplexStream = null;

  options = options || {};

  inStream = iconfontCss({
      fontName: options.fontName,
      targetPath: 'icons.css',
      fontPath: '',
      cssClass: options.fontAlias
    }).pipe(htmlGen(options));

  outStream = inStream
  	.pipe(svgicons2svgfont(options))
    .pipe(svg2ttf({ clone: true }))
    .pipe(ttf2eot({ clone: true }))
    .pipe(ttf2woff({ clone: true }))
    .pipe(ttf2woff2({ clone: true }));

  duplexStream = duplexer({ objectMode: true }, inStream, outStream);

  return duplexStream;
}

module.exports = gulpFontIcon;
