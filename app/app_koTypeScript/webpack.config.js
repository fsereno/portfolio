const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'typeScript', 'app.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'js'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};