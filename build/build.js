const { series } = require('gulp');

const indexHandle = require("./tasks/index");
const scssTranspile = require("./tasks/scss");
const tsTranspile = require("./tasks/ts");

const tasks = [indexHandle, scssTranspile ,tsTranspile];

module.exports = series(...tasks);
module.exports.default = series(...tasks);
