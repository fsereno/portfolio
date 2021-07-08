const webpackHelper = require("./webpackHelper");

module.exports = () => {

  const isProduction = webpackHelper.isProduction();

  const rule = {
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
  return rule;
};