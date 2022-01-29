const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    static: "./dist",
  },
  devtool: "inline-source-map",
  mode: "development",
});
