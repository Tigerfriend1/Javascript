// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./main3.js", // main.js가 진입점
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // 번들 결과물 위치
  },
  mode: "development",
  devtool: "source-map",
};
