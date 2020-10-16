const path = require('path');
const config = require("./config.json");

module.exports = [
  {
    entry: './app/app_home/src/app.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, './app/js'),
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
  }
];