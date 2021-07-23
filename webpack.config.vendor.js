const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpackHelper = require('./webpackHelper');

module.exports = (env) => {
  return {
    mode: webpackHelper.getMode(env),
    entry: {
      vendor: [
        'bootstrap',
        './app/sass/includes/styleDeps.scss'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist', 'vendor'),
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '../fonts/',
                publicPath: '../fonts/',
              }
            }
          ]
        },
      ]
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    }
  }
};