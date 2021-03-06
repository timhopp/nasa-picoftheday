const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = {
  entry: {
    app: ["./src/app/index.tsx"],
    vendor: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "distribution"),
    filename: "js/[name].bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: ["source-map-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src", "app", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
