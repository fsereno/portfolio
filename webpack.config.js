const webpackBuilder = require('./webpackBuilder');
const vendorsWebpack = require('./webpack.config.vendor')();

module.exports = (env) => {
  const webpacks = webpackBuilder.getAllConfig();
  webpacks.push(vendorsWebpack);

  console.log(webpacks[2])
  return [ webpacks[2] ];
}