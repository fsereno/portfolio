const path = require('path');
const config = require('./config');
const webpackHelper = require("./webpackHelper");

module.exports = () => {

  const outputDirectory = webpackHelper.getOutputDirectory();

  return {
        entry: {
            vendor: path.resolve(__dirname, config.developmentDir, 'js', 'includes', 'deps.js')
        },
        output: {
            path: path.resolve(__dirname, outputDirectory, 'js')
        }
    }
};