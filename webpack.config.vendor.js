const webpackHelper = require("./webpackHelper");
const config = require('./config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {

  const outputDirectory = webpackHelper.getOutputDirectory();
  const isProduction = webpackHelper.isProduction();
  const mode = webpackHelper.getMode();

  return {
    mode: mode,
    entry: {
      vendor: path.resolve(__dirname, config.developmentDir, 'js', 'includes', 'deps.js')
    },
    output: {
        path: path.resolve(__dirname, outputDirectory, 'js')
    },
    plugins: [ new MiniCssExtractPlugin() ],
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
                name: isProduction ? '[contenthash].[ext]' : '[name].[ext]',
                outputPath: '../fonts/',
                publicPath: '../fonts/',
              }
            }
          ]
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