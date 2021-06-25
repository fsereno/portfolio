const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'js'),
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
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