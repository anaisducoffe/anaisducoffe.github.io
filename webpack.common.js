const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
