const webpackBuilder = require('./webpackBuilder');
const vendorsWebpack = require('./webpack.config.vendor')();

module.exports = (env) => {

  console.log(env)

  // npx webpack serve --env dir=toDoReact

  const webpacks = webpackBuilder.getAllConfig(env);
  //PUT THIS BACK IN webpacks.push(vendorsWebpack) PUT THIS BACK IN!;

  console.log(webpacks)

  return webpacks;
}