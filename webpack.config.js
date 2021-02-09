const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { PORT } = require("./config");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index_template.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        PORT: JSON.stringify(PORT),
      },
    }),
  ],
  devServer: {
    index: "", // specify to enable root proxying
    proxy: {
      context: () => true,
      target: `http://localhost:${PORT}`,
    },
  },
};
