const path = require('path');
const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master")();
const vendorWebpackConfig = require("./webpack.config.vendor")();

module.exports = {

  buildWebpackConfig: (application) => {

    //const application = applications.pop();
    const masterWebpackConfigInstance = {...masterWebpackConfig};
    const publicDir = webpackHelper.getFullDirectoryPath(application);
    const outputDirectory = webpackHelper.getOutputDirectory();
    let applicationWebpackConfigInstance;

    try {

      const applicationWebpackConfig = require(`${publicDir}/webpack.config`);

      applicationWebpackConfigInstance = {...applicationWebpackConfig};

    } catch (exception) {

      applicationWebpackConfigInstance = {}

    }

    const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
    const outputPath = path.resolve(__dirname, outputDirectory, `${config.prefix}${application.folder}`, 'js');

    masterWebpackConfigInstance.entry = entryPath;
    masterWebpackConfigInstance.output.path = outputPath;

    const webpackConfig = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

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
  getAllConfig: () => {

    const applications = webpackHelper.getApplications();
    const configs = [];

    applications.forEach(application => {

      const { webpackConfig } = module.exports.buildWebpackConfig(application);

      configs.push(webpackConfig);

    });

    return configs;
  }
}