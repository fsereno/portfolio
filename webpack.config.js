const webpackBuilder = require('./webpackBuilder');
const webpackHelper = require('./webpackHelper');

module.exports = (env) => {
  const webpacks = webpackBuilder.getAllConfig(env);
  webpackHelper.getVendorWebpackConfig(env, webpacks);
  webpackHelper.logNumberOfCompilingConfigs(webpacks);
  webpackHelper.logAllCompiling(webpacks);

  console.log(webpacks)

  return webpacks;
}