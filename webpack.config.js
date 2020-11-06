module.exports = env => {

    const config = require("./config.json");
    const webpackUtil = require("./webpackUtil");

    let webpackConfigs = webpackUtil.collectWebPackConfigs(config, env);

    return webpackConfigs
};