// const path = require("path"),
//   express = require("express"),
//   webpack = require("webpack"),
//   webpackConfig = require("./webpack.config.js"),
//   app = express(),
//   port = process.env.PORT || 3000;

// if (process.env.NODE_ENV === "production") {
//   //set static folder
//   app.use(express.static("client/distribution"));
// }
// // what is my current path?
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "distribution", "index.html"));
// });
// app.listen(port, () => {
//   console.log(`App is listening on port ${port}`);
// });
// let compiler = webpack(webpackConfig);
// app.use(
//   require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath,
//     stats: { colors: true },
//   })
// );
// app.use(require("webpack-hot-middleware")(compiler));
// app.use(express.static(path.resolve(__dirname, "distribution")));
