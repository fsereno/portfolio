module.exports = async (env) => {

  const webpackBuilder = await (await import("./webpackBuilder.js")).default();
  const webpackHelper = await (await import("./webpackHelper.js")).default();

  console.log(webpackBuilder)
  console.log(webpackHelper)

  const webpacks = webpackBuilder.getAllConfig(env);
  webpackHelper.getVendorWebpackConfig(env, webpacks);
  webpackHelper.logNumberOfCompilingConfigs(webpacks);
  webpackHelper.logAllCompiling(webpacks);
  webpackHelper.logAnalysis(env);
  return webpacks;
}