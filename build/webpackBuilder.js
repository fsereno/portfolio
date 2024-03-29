const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master");
const chalk = require('chalk');
const webpack = require('webpack');

module.exports = {
  build: () => {
    const env = {
      production: true,
      WEBPACK_BUILD: true
    }
    const webpacks = module.exports.getAllConfig(env);
    webpackHelper.getVendorWebpackConfig(env, webpacks);
    webpackHelper.logNumberOfCompilingConfigs(webpacks);
    webpackHelper.clearOutputDirectory();
    module.exports.run(webpacks);
  },
  run: (configs) => {

    if (!configs || configs.length === 0) {
      webpackHelper.logDone();
      return;
    }

    const config = configs.pop();
    const compiler = webpack(config);

    webpackHelper.logSingleCompiling(config);

    compiler.run((err, stats) => {
      if (err !== null) {
        webpackHelper.logSingleError(config);
        return;
      }
      compiler.close((closeErr) => {
        if (closeErr !== null) {
          webpackHelper.logSingleError(config);
          return;
        }
        webpackHelper.logSingleCompleted(config);
        module.exports.run(configs);
      });
    });
  },
  buildWebpackConfig: (application, env) => {

    const publicDir = webpackHelper.getFullDirectoryPath(application);
    let applicationWebpackConfigInstance;

    try {
      const applicationWebpackConfig = require(`${publicDir}/webpack.config`);
      applicationWebpackConfigInstance = {...applicationWebpackConfig};
    } catch (exception) {
      applicationWebpackConfigInstance = {}
    };

    const master = masterWebpackConfig(env, application);

    let webpackConfig = {
      ...master,
      ...applicationWebpackConfigInstance
    };

    webpackConfig = webpackHelper.getDevServerConfig(webpackConfig, application, env);

    let plugins = [...webpackConfig.plugins];

    plugins = webpackHelper.getAnalysisConfig(plugins, env);

    let htmlWebpackPluginConfigs = [];

    try {
      htmlWebpackPluginConfigs = webpackHelper.getHtmlWebpackPluginObjects(application);
    } catch (error) {
      console.log(chalk.redBright(`ERROR: unable to get plugin objects for ${application.name}`));
    }

    webpackConfig = {
      ...webpackConfig,
      plugins: [
        ...plugins,
        ...htmlWebpackPluginConfigs
      ]
    };
    return webpackConfig;
  },
  getAllConfig: (env) => {
    const applications = webpackHelper.getApplications(env);
    let configs = [];
    applications.forEach(application => {
      const webpackConfig = module.exports.buildWebpackConfig(application, env);
      configs = [...configs, webpackConfig]
    });
    return configs;
  }
}