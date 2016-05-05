var path = require("path");
var through = require("through2");
var File = require("vinyl");
var jade = require("jade");

module.exports = function(options)
{
    const icons = [];

    function bufferStream(file, enc, cb)
    {
        icons.push(path.parse(file.path).name);
        cb();
    }

    function endStream(cb)
    {
        const htmlFile = new File({
          cwd: "/",
          base: "/",
          path: "/index.html"
        });
        const compile = jade.compileFile(path.join(__dirname, "./index.jade"));
        htmlFile.contents = new Buffer(compile({ icons, fontAlias: options.fontAlias }));
        this.push(htmlFile);
        console.log(icons);
        cb();
    }

    return through.obj(bufferStream, endStream);
};
