const webpackHelper = require("./webpackHelper");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {

  const mode = webpackHelper.getMode();

  return {

    mode: mode,
    entry: "",
    output: {
      path: ""
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
      ]
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    },
    devServer: {
      contentBase: 'app',
      publicPath: './app',
      port: 8080,
      host: '0.0.0.0'
    },
  }
};