const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {

  return {
    //devtool: 'source-map',
    entry: {
      main: "",
    },
    output: {
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        analyzerMode: "server",
        analyzerHost: '0.0.0.0',
        analyzerPort: 8080
      })
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
                outputPath: '../../images/',
                publicPath: '../images/',
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
                outputPath: '../../',
                publicPath: '../',
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