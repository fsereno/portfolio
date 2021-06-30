const webpack = require('webpack');
const config = require("./config.json");
const chalk = require('chalk');

module.exports = {

  getDirectory: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,

  // is this needed
  getEntry: (directory, entry) => {

    const result = `${directory}/${entry.replace("./", "")}`;

    return result;

  },

  // is this needed - YES
  getPublicPath: (application, path = "", isProduction) => {

    let publicPath = path.replace("..", "");

    publicPath = isProduction
      ? !application.useRoot ? `${config.prefix}${application.folder}/js/` : "js/"
      : publicPath;

      return publicPath;
  },

  _build: (applications, isProduction) => {

    if (applications.length === 0) {
      console.log(chalk.green("All builds complete"));
      process.exit(0);
    }

    if (applications.length > 0) {
      console.log(chalk.blue(`Building: ${applications.length} applications...`));
    }

    const application = applications.pop();

    const directory = module.exports.getDirectory(application);

    if (application.useWebpack) {

      try {

          const webpackConfig = require(`${directory}/webpack.config`);

          const modifiedWebpackConfig = {...webpackConfig};

          if (isProduction) {
            delete modifiedWebpackConfig.devtool;
            modifiedWebpackConfig.mode = "production";
            modifiedWebpackConfig.output.path = webpackConfig.output.path.replace("/app/app/", "/app/docs/");
            modifiedWebpackConfig.output.publicPath = module.exports.getPublicPath(application, webpackConfig.output.publicPath, isProduction);
          }

          const compiler = webpack(modifiedWebpackConfig);

          console.log(chalk.yellow("Starting: " + directory));

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
                      console.log(chalk.green("Finished: " + directory));
                      module.exports._build(applications, isProduction);
                  }

              });
          });

        } catch (exception) {

          console.error(exception);

        }

    } else {

      console.log(chalk.magenta(`skipping: ${directory}`));
      module.exports._build(applications, isProduction);

    }

  },

  isProduction: argv =>  {
    const ePassed = argv.indexOf("e");
    const production = argv.indexOf("production");
    const isProduction = ePassed > 0 && production > 0 && ePassed + 1 === production;
    return isProduction;
  },

  hasDirectory: argv =>  {
    const dPassed = argv.indexOf("d");
    const hasDirectory = dPassed > 0 && dPassed + 1 <= argv.length - 1;
    const dir = argv[dPassed + 1].replace(config.prefix, "");
    return [ hasDirectory, dir ];
  },

  /// Accepted arguments
  // -- (everything after -- is an argument)
  // e production (to run production builds)
  // d app_home (to run single builds)
  ///
  build: () => {

    const isProduction = module.exports.isProduction(process.argv);
    const [ hasDirectory, directory] = module.exports.hasDirectory(process.argv);
    let applications = [];

    if (hasDirectory) {
      applications = [...config.applications.filter(x => x.folder === directory)];
    } else {
      applications = [...config.applications];
    }

   module.exports._build(applications, isProduction);

  }
}