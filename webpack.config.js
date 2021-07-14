const webpackBuilder = require('./webpackBuilder');
const vendorsWebpack = require('./webpack.config.vendor')();

module.exports = (env) => {

  console.log(env)

  // npx webpack serve --env dir=toDoReact

  const webpacks = webpackBuilder.getAllConfig(env);
  //webpacks.push(vendorsWebpack); this breaks the hot reload

  console.log(webpacks)

  return webpacks;
}