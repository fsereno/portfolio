const path = require('path');
const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master")();
const vendorWebpackConfig = require("./webpack.config.vendor")();

module.exports = {

  buildWebpackConfig: (application, env) => {

    const publicDir = webpackHelper.getFullDirectoryPath(application);
    const outputDirectory = webpackHelper.getOutputDirectory(env);
    const isServe = webpackHelper.isServe(env);
    let applicationWebpackConfigInstance;

    try {

      const applicationWebpackConfig = require(`${publicDir}/webpack.config`);

      applicationWebpackConfigInstance = {...applicationWebpackConfig};

    } catch (exception) {

      applicationWebpackConfigInstance = {}

    }

    const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
    const outputPath = path.resolve(__dirname, outputDirectory, `${config.prefix}${application.folder}`, 'js');
    const mode = webpackHelper.getMode(env);

    const masterWebpackConfigInstance = {...masterWebpackConfig, ...{
      mode,
      entry: entryPath,
      output: {
        path: outputPath
      }
    } };

    let webpackConfig = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

    if (isServe) {

      const devServer = {
        contentBase: path.join(__dirname, 'app'),
        publicPath: `/${config.prefix}${application.folder}/js/`,
        port: 8080,
        host: '0.0.0.0',
        open: true,
        watchContentBase: true
      }

      webpackConfig = {...webpackConfig, ...{ devServer } }
    }

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

  vendor: () => {
    const vendorCompiler = webpack(vendorWebpackConfig);
    module.exports.run(vendorCompiler, "vendor directories");
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

  /// Accepted arguments
  // --production (eg, to run production builds)
  // --dir=toDoReact (eg, to run single builds with watching by default)
  ///
  build: () => {

    const applications = webpackHelper.getApplications();
    const isProduction = webpackHelper.isProduction();

    module.exports.vendor();

    if (applications.length > 0) {

      console.log(`${chalk.blue("Building:")} ${applications.length} applications...`);

      applications.forEach(application => {

        const { webpackConfig, publicDir } = module.exports.buildWebpackConfig(application);

        if (isProduction) {
          module.exports.production(webpackConfig, publicDir);
        } else {
          module.exports.development(webpackConfig, publicDir);
        }

      });

    } else {
      console.log(chalk.red("No applictions found!"));
    }
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