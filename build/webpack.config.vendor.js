const path = require('path');
const config = require("../config.json");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpackHelper = require('./webpackHelper');

module.exports = (env) => {
  const mode = webpackHelper.getMode(env);
  return {
    mode: mode,
    entry: {
      vendor: [
        'bootstrap',
        './app/sass/includes/styleDeps.scss',
        './app/js/modules/react/navFilterComponent/app.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../', config.publishDir, 'vendor')
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