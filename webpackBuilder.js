const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const webpackHelper = require("./webpackHelper");
const masterWebpackConfig = require("./webpack.config.master")();
const webpackConfigFontsRule = require("./webpack.config.fonts.rule")();
const depsWebpackConfig = require("./webpack.config.deps")();
const vendorWebpackConfig = require("./webpack.config.vendor")();

module.exports = {

  _build: (applications, hasDirectory) => {

    const isProduction = webpackHelper.isProduction();

    if (applications.length === 0) {
      console.log(chalk.green("All builds complete"));
      process.exit(0);
    }

    if (applications.length > 0) {
      console.log(`${chalk.blue("Building:")} ${applications.length} applications...`);
    }

    const application = applications.pop();
    const masterWebpackConfigInstance = {...masterWebpackConfig};
    const directory = webpackHelper.getDirectory(application);
    const outputDirectory = webpackHelper.getOutputDirectory();

    let applicationWebpackConfigInstance = {};

    if (application.useWebpack) {

      try {

        const applicationWebpackConfig = require(`${directory}/webpack.config`);

        applicationWebpackConfigInstance = {...applicationWebpackConfig};

      } catch (exception) {

        console.log(chalk.yellow("Using master config."));

      }

      if (isProduction) {
       // masterWebpackConfigInstance.mode = "production";
        delete applicationWebpackConfigInstance.devtool;
      }

      const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');
      const outputPath = path.resolve(__dirname, outputDirectory, `${config.prefix}${application.folder}`, 'js');

      masterWebpackConfigInstance.entry = entryPath;
      masterWebpackConfigInstance.output.path = outputPath;

      const combinedWebpackConfigInstance = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

      const compiler = webpack(combinedWebpackConfigInstance);

      if (hasDirectory && !isProduction) {

        module.exports.watch(compiler, directory);

      } else {

        module.exports.compile(compiler, directory);

      }

    } else {

      console.log(chalk.magenta("Skipping: ") + directory);

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

    const isProduction = webpackHelper.isProduction();
    const [ hasDirectory, directory] = webpackHelper.hasDirectory(process.env.npm_config_dir);

    let applications = [];

    if (hasDirectory) {
      applications = [...config.applications.filter(x => x.folder === directory)];
    } else {
      applications = [...config.applications];
    }

    /*const masterWebpackConfigInstance = {...masterWebpackConfig};
    const depswebackConfigInstance = {...depsWebpackConfig};
    const combinedWebpackConfigInstance = {...masterWebpackConfigInstance, ...depswebackConfigInstance};*/
    const depsOutputDirectory = webpackHelper.getOutputDirectory();

    //combinedWebpackConfigInstance.module.rules.push(webpackConfigFontsRule);

    /*if (isProduction) {
      combinedWebpackConfigInstance.mode = "production";
    }*/

    //const depsCompiler = webpack(combinedWebpackConfigInstance);

    console.log(vendorWebpackConfig);

    const vendorCompiler = webpack(vendorWebpackConfig);

    module.exports.compile(vendorCompiler, "vendor directories");

    while (applications.length > 0) {
      module.exports._build(applications, isProduction, hasDirectory);
    }
  }
}