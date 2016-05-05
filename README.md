# gulp-font-icon

`gulp-font-icon` is a gulp plugin to generate icon fonts from SVG files.

## Usage

First, install gulp-font-icon as a development dependency:

	npm install --save-dev gulp-font-icon

Then, add it to your gulpfile.js:

	var fontIcon = require("gulp-font-icon");
	
	gulp.task("fontIcon", function() {
		return gulp.src(["src/res/icons/*.svg"])
			.pipe(fontIcon({
				fontFamily: "myfont",
				fontAlias: "mf"
			}))
			.pipe(gulp.dest("assets/res/icons/"));
	});

## API 

### options.fontFamily

Type: `String` Default value: "fontIcon"



### options.fontAlias

Type： `String` Default value: "fi"

