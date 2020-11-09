const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

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
        // loader: ,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: ["source-map-loader"],
        // loader: ,
      },
    ],
  },

  //Breaking webpack from some reason, cannot find index.html
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, "src", "app", "index.html"),
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  // ],

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src", "app", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
