
const config = require("./config.json");
const webpackUtil = require("./webpackUtil");
const [ node, command, environment ] = process.argv;
const isProduction = environment ? true : false;
const webpackConfigs = webpackUtil.collectWebPackConfigs(config, { production: isProduction });

module.exports = webpackConfigs;