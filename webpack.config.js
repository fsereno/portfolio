const config = require("./config.json");
const webpackUtil = require("./webpackUtil");
let webpackConfigs = webpackUtil.collectWebPackConfigs(config);
module.exports = webpackConfigs;