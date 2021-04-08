const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../js'),
    publicPath: '../js/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};