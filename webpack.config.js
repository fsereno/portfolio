const webpackBuilder = require('./webpackBuilder');
const webpackHelper = require('./webpackHelper');
//const vendorsWebpack = require('./webpack.config.vendor')();

module.exports = (env) => {

  console.log(env)

  // npx webpack serve --env dir=toDoReact
  // node -e 'require(\"./webpackBuilder\").build()

  const webpacks = webpackBuilder.getAllConfig(env);
  const isBuild = webpackHelper.isBuild(env);

  if (isBuild) {
    //webpacks.push(vendorsWebpack);
  }

  webpackHelper.logNumberOfCompilingConfigs(webpacks);
  webpackHelper.logAllCompiling(webpacks);

  console.log(webpacks)

  return webpacks;
}