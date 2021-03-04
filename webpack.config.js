const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const webpack = require("webpack");

const IS_DEV = process.env.NODE_ENV === "development";

module.exports = {
  entry: IS_DEV ? "./local.jsx" : "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].js",
    library: "MicroFrontendApp1",
    libraryTarget: "umd",
    publicPath: IS_DEV ? "/" : "/app1",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 2 },
          },
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      __IS_DEV__: IS_DEV,
    }),
    IS_DEV
      ? new HtmlWebpackPlugin({
          template: "./index.html",
        })
      : new WebpackManifestPlugin(),
  ],
};
