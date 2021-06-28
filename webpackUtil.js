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

      console.log(chalk.yellow(`skipping: ${directory}`));
      module.exports._build(applications, isProduction);

    }

  },

  isProduction: argv =>  {
    const env = argv.indexOf("e");
    const production = argv.indexOf("production");
    const isProduction = env > 0 && production > 0 && env + 1 === production;
    return isProduction;
  },

  hasDirectory: argv =>  {
    const dir = argv.indexOf("d");
    const hasDirectory = dir > 0 && dir + 1 <= argv.length - 1;
    return hasDirectory;
  },

  /// Accepted arguments
  // -- (everything after -- is an argument)
  // e production
  // d app_home
  ///
  build: () => {

    const isProduction = module.exports.isProduction(process.argv);
    const hasDirectory = module.exports.hasDirectory(process.argv);
    const applications = [...config.applications];

    module.exports._build(applications, isProduction);

  }
}