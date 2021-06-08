const { src, dest } = require("gulp");

const indexHandle = function () {

    const result = src("./../src/index.html");
    return result.pipe(dest("./../dist/"));

};

module.exports = indexHandle;
