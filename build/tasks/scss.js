const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

sass.compiler = require("sass");

const stylesTranspile = function () {

    let result = src("./../src/scss/entry.scss");
    result = result.pipe(sass().on("error", sass.logError));
    result = result.pipe(rename({ basename: "app" }));
    return result.pipe(dest("./../dist"));

};

module.exports = stylesTranspile;
