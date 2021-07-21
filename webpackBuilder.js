const path = require('path');
const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const webpackHelper = require("./webpackHelper");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const masterWebpackConfig = require("./webpack.config.master")();

module.exports = {

  buildWebpackConfig: (application, env) => {

    const publicDir = webpackHelper.getFullDirectoryPath(application);
    const isServe = webpackHelper.isServe(env);
    let applicationWebpackConfigInstance;

    try {

      const applicationWebpackConfig = require(`${publicDir}/webpack.config`);

      applicationWebpackConfigInstance = {...applicationWebpackConfig};

    } catch (exception) {

      applicationWebpackConfigInstance = {}

    }

    const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
    const outputPath = path.resolve(__dirname, 'dist', `${config.prefix}${application.folder}`, 'js');
    const mode = webpackHelper.getMode(env);

    const masterWebpackConfigInstance = {...masterWebpackConfig, ...{
      mode,
      entry: {...masterWebpackConfig.entry, main: entryPath },
      output: {...masterWebpackConfig.output,
        path: outputPath
      }
    } };

    let webpackConfig = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

    if (isServe) {

      const devServer = {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: `/${config.prefix}${application.folder}/js/`,
        port: 8080,
        host: '0.0.0.0',
        open: true,
        watchContentBase: true
      }

      webpackConfig = {...webpackConfig, ...{ devServer } }
    }

    const htmlFilename = application.useRoot
      ? `${path.resolve(__dirname, 'dist')}/index.html`
      : `${path.resolve(__dirname, 'dist', `${config.prefix}${application.folder}`)}/index.html`

    const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: "!!pug-loader!" + path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'pug', 'index.pug'),
      filename: htmlFilename,//`${path.resolve(__dirname, 'dist')}/index.html`,
      locals: { config: config, application: application }
    });

    webpackConfig.plugins.push(htmlWebpackPluginConfig)

    return {
      webpackConfig,
      publicDir
    };
  },

  development: (config, publicDir) => {

    const compiler = webpack(config);

    const [ hasDirectory ] = webpackHelper.hasDirectory();

    if (hasDirectory) {

      module.exports.watch(compiler, publicDir);

    } else {

      module.exports.run(compiler, publicDir);

    }
  },

  production: (config, publicDir) => {
    const compiler = webpack(config);
    module.exports.run(compiler, publicDir);
  },

  run: (compiler, directory) => {

    console.log(chalk.yellow("Compiling: ") + directory);

    compiler.run( (err, stats) => {

      if (err) {
          console.error(chalk.red(err));
          process.exit(1);
      }

      compiler.close(closeErr => {

          if (closeErr) {
              console.error(chalk.red(closeErr));
              process.exit(1);
          } else {
              webpackHelper.logCompiled(directory);
          }
      });
    });
  },

  watch: (compiler, directory) => {

    compiler.watch({
      aggregateTimeout: 300,
      poll: undefined,
      ignored: /node_modules/
    }, (err, stats) => {

      webpackHelper.logCompiled(directory, stats.compilation.endTime);
      console.log(chalk.magentaBright("Watching: ") + directory)

    });
  },

  getAllConfig: (env) => {

    const applications = webpackHelper.getApplications(env);

    let configs = [];

    applications.forEach(application => {

      const { webpackConfig } = module.exports.buildWebpackConfig(application, env);

      configs = [...configs, webpackConfig]

    });

    return configs;
  }
}