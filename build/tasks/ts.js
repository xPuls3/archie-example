const { src, dest } = require("gulp");
const webpack = require("webpack-stream");
const webpackConfig = require("./scripts.webpack");
const fs = require("fs");
const path = require("path");

const tsConfigRaw = fs.readFileSync("../tsconfig.json", "utf8");
const tsConfig = JSON.parse(tsConfigRaw).compilerOptions;

const root = path.join(process.cwd(), "./../");
const source = path.join(root, "src/ts/startup.ts");
const dist = path.join(root, "dist/");

const tsTranspile = async function () {
    return src(path.join(source)).pipe(webpack(webpackConfig).on("error", console.log)).pipe(dest(dist));
};

module.exports = tsTranspile;
