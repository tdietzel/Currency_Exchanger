const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  devtool: "eval-source-map",
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Currency Exchange",
      template: "./src/index.html",
      inject: "body",
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
          publicPath: "assets/images/",
          outputPath: "assets/images/",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};