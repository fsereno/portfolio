const webpackBuilder = require('./webpackBuilder');
const webpackHelper = require('./webpackHelper');

module.exports = (env) => {

  const webpacks = webpackBuilder.getAllConfig(env);

  webpackHelper.logNumberOfCompilingConfigs(webpacks);
  webpackHelper.logAllCompiling(webpacks);

  //console.log(JSON.stringify(webpacks))

  return webpacks;
}