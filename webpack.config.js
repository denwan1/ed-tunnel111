// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "worker.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
