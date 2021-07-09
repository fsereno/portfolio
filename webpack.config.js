const webpackBuilder = require('./webpackBuilder');

module.exports = (env) => {
  const webpacks = webpackBuilder.getAllConfig();
    //console.log(webpacks);
    return webpacks;
}