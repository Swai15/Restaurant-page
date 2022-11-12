const { loadavg } = require("os");
const path = require("path");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: ".src/index.js",
    print: "./src/homeTab.js",
    pageLoad: "./src/page-load.js"

  },
  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname,"dist")
  },
  mode: "development"
}