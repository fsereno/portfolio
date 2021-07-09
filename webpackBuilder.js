const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master")();
const vendorWebpackConfig = require("./webpack.config.vendor")();

module.exports = {

  _build: (applications) => {

    const isProduction = webpackHelper.isProduction();
    const [ hasDirectory ] = webpackHelper.hasDirectory();

    if (applications.length === 0) {
      console.log(chalk.green("All builds complete"));
      process.exit(0);
    }

    const application = applications.pop();
    const masterWebpackConfigInstance = {...masterWebpackConfig};
    const fullDirectoryPath = webpackHelper.getFullDirectoryPath(application);
    const outputDirectory = webpackHelper.getOutputDirectory();

    let applicationWebpackConfigInstance = {};

    if (application.useWebpack) {

      try {

        const applicationWebpackConfig = require(`${fullDirectoryPath}/webpack.config`);

        applicationWebpackConfigInstance = {...applicationWebpackConfig};

      } catch (exception) {

        console.log(chalk.yellow("Using master config."));

      }

      if (isProduction) {
        delete applicationWebpackConfigInstance.devtool;
      }

      const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
      const outputPath = path.resolve(__dirname, outputDirectory, `${config.prefix}${application.folder}`, 'js');

      masterWebpackConfigInstance.entry = entryPath;
      masterWebpackConfigInstance.output.path = outputPath;

      const combinedWebpackConfigInstance = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

      const compiler = webpack(combinedWebpackConfigInstance);

      if (hasDirectory && !isProduction) {

        module.exports.watch(compiler, fullDirectoryPath);

      } else {

        module.exports.compile(compiler, fullDirectoryPath);

      }

    } else {

      console.log(chalk.magenta("Skipping: ") + fullDirectoryPath);

    }

  },

  compile: (compiler, directory) => {

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
              module.exports.logCompiled(directory);
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

      module.exports.logCompiled(directory, stats.compilation.endTime);
      console.log(chalk.magentaBright("Watching: ") + directory)

    });
  },

  logCompiled: (directory, stamp) => {

    let message = `${chalk.green("Compiled:")} ${directory}`;

    if (stamp) {
      message += ` ${stamp}`;
    }

    console.log(message);
  },

  /// Accepted arguments
  // --production (eg, to run production builds)
  // --dir=toDoReact (eg, to run single builds with watching by default)
  ///
  build: () => {

    const applications = webpackHelper.getApplications();
    const vendorCompiler = webpack(vendorWebpackConfig);

    module.exports.compile(vendorCompiler, "vendor directories");

    if (applications.length > 0) {
      console.log(`${chalk.blue("Building:")} ${applications.length} applications...`);
    }

    while (applications.length > 0) {
      module.exports._build(applications);
    }
  }
}