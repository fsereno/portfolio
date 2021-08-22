const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpackHelper = require('./webpackHelper');
const config = require("../config.json");
const path = require('path');

module.exports = (env, application) => {
  const isRoot = webpackHelper.applicationIsRoot(application);
  const directory = webpackHelper.getRelativeDirectoryPath(isRoot);
  const mode = webpackHelper.getMode(env);
  const entryPath = path.resolve(__dirname, '../', config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
  const outputPath = webpackHelper.getOutputDirectory(application);
  return {
    mode: mode,
    entry: {
      main: entryPath,
    },
    output: {
      path: outputPath
    },
    plugins: [
      new MiniCssExtractPlugin(),
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
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: `${directory}/images/`,
                publicPath: `${directory}/images/`
              }
            }
          ]
        },
        {
          test: /\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: `${directory}/`,
                publicPath: `${directory}/`
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          loader: "pug-loader",
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 1
          }
        }
      },
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    }
  }
};