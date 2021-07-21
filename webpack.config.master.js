const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {

  return {
    //devtool: 'source-map',
    entry: {
      main: "",
      '../../vendor/vendor': ['bootstrap', './app/sass/includes/styleDeps.scss']
    },
    output: {
      filename: '[name].js',
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
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
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
                outputPath: '../../fonts/',
                publicPath: '../fonts/',
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '../../images/',
                publicPath: '../images/',
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
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    }
  }
};