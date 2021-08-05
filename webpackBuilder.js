const path = require('path');
const config = require("./config.json");
const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master")();
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

    const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
    const outputPath = path.resolve(__dirname, config.publishDir, `${config.prefix}${application.folder}`, 'js');
    const mode = webpackHelper.getMode(env);
    const masterWebpackConfigInstance = {
      ...masterWebpackConfig,
      ...{
        mode,
        entry: {...masterWebpackConfig.entry, main: entryPath },
        output: {...masterWebpackConfig.output,
          path: outputPath
        }
      }
    };

    let webpackConfig = {
      ...masterWebpackConfigInstance,
      ...applicationWebpackConfigInstance
    };

    webpackConfig = webpackHelper.getDevServerConfig(webpackConfig, application, env);

    let plugins = [...webpackConfig.plugins];

    plugins = webpackHelper.getAnalysisConfig(plugins, env)

    const htmlWebpackPluginConfigs = webpackHelper.getHtmlWebpackPluginObjects(application);

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