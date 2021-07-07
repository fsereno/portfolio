const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');
const masterWebpackConfig = require("./webpack.config.master");

module.exports = {

  getDirectory: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,

  _build: (applications, isProduction, hasDirectory) => {

    if (applications.length === 0) {
      console.log(chalk.green("All builds complete"));
      process.exit(0);
    }

    if (applications.length > 0) {
      console.log(`${chalk.blue("Building:")} ${applications.length} applications...`);
    }

    const application = applications.pop();

    const masterWebpackConfigInstance = {...masterWebpackConfig};

    let applicationWebpackConfigInstance = {};

    const directory = module.exports.getDirectory(application);

    if (application.useWebpack) {

      try {

          const applicationWebpackConfig = require(`${directory}/webpack.config`);

          applicationWebpackConfigInstance = {...applicationWebpackConfig};

        } catch (exception) {

          console.log(chalk.yellow("Using master config."));

        }

        if (isProduction) {
          masterWebpackConfigInstance.mode = "production";
          delete applicationWebpackConfigInstance.devtool;
        }

        const outputDirectory = isProduction ? config.publishDir : config.developmentDir;
        const outputPath = path.resolve(__dirname, outputDirectory, `${config.prefix}${application.folder}`, 'js');
        const entryPath = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'src', 'app.js');

        masterWebpackConfigInstance.entry = entryPath;
        masterWebpackConfigInstance.output.path = outputPath;

        const combinedWebpackConfigInstance = {...masterWebpackConfigInstance, ...applicationWebpackConfigInstance};

        const compiler = webpack(combinedWebpackConfigInstance);

        if (hasDirectory && !isProduction) {

          compiler.watch({
            aggregateTimeout: 300,
            poll: undefined,
            ignored: /node_modules/
          }, (err, stats) => {

            module.exports.logCompiled(directory, stats.compilation.endTime);
            console.log(chalk.magentaBright("Watching: ") + directory)

          });

        } else {

          console.log(chalk.yellow("Starting: ") + directory);

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
                    module.exports._build(applications, isProduction);
                }
            });
          });
        }

    } else {

      console.log(chalk.magenta("Skipping: ") + directory);
      module.exports._build(applications, isProduction);

    }

  },

  logCompiled: (directory, stamp) => {

    let message = `${chalk.green("Compiled:")} ${directory}`;

    if (stamp) {
      message += ` ${stamp}`;
    }

    console.log(message);
  },

  isProduction: env => env && env === "production",

  hasDirectory: dir =>  {
    const hasDirectory = dir && dir.length > 0;
    const directory = hasDirectory ? dir.replace(config.prefix, "") : "";
    return [ hasDirectory, directory ];
  },

  /// Accepted arguments
  // --env=production (eg, to run production builds)
  // --dir=toDoReact (eg, to run single builds with watching by default)
  ///
  build: () => {

    const isProduction = module.exports.isProduction(process.env.npm_config_env);
    const [ hasDirectory, directory] = module.exports.hasDirectory(process.env.npm_config_dir);
    let applications = [];

    if (hasDirectory) {
      applications = [...config.applications.filter(x => x.folder === directory)];
    } else {
      applications = [...config.applications];
    }

    module.exports._build(applications, isProduction, hasDirectory);
  }
}