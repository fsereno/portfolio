const webpack = require('webpack');
const config = require("./config.json");

module.exports = {

  getDirectory: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,

  getEntry: (directory, entry) => {

    const result = `${directory}/${entry.replace("./", "")}`;

    return result;

  },

  getPublicPath: (application, path = "", env) => {

    let publicPath = path.replace("..", "");

    publicPath = env.production
      ? !application.useRoot ? `${config.prefix}${application.folder}/js/` : "js/"
      : publicPath;
      return publicPath;
  },

  collectWebPackConfigs: (env = { production: false }) => {

    let webpackConfigs = [];

    config.applications.forEach(application => {

      if (application.useWebpack) {

        const directory = module.exports.getDirectory(application);

        try {

          const webpackConfig = require(`${directory}/webpack.config`);

          const modifiedWebpackConfig = {...webpackConfig};

          modifiedWebpackConfig.mode = env.production ? "production" : "development";

          //modifiedWebpackConfig.entry = module.exports.getEntry(directory, webpackConfig.entry);

          modifiedWebpackConfig.output.path = env.production
            ? webpackConfig.output.path.replace("app", "docs")
            : webpackConfig.output.path;

          modifiedWebpackConfig.output.publicPath = module.exports.getPublicPath(application, webpackConfig.output.publicPath, env);

          webpackConfigs.push(modifiedWebpackConfig);

        } catch (exception) {

          console.error(exception);

        }
      }
    });
    return webpackConfigs;
  },
  _build: (applications) => {

    if (applications.length === 0) {
      console.log("All builds complete");
      process.exit(0);
    }

    if (applications.length > 0) {
      console.log(`Building: ${applications.length} applications...`);
    }

    const application = applications.pop();

    if (application.useWebpack) {

      const directory = module.exports.getDirectory(application);

      try {

          const webpackConfig = require(`${directory}/webpack.config`);
          const compiler = webpack(webpackConfig);

          console.log("Starting: " + directory);

          compiler.run( (err, stats) => {

              if (err) {
                  console.error(err);
                  process.exit(1);
              }

              compiler.close(closeErr => {

                  if (closeErr) {
                      console.error(err);
                      process.exit(1);
                  } else {
                      console.log("Finished: " + directory);
                      module.exports._build(applications);
                  }

              });
          });

        } catch (exception) {

          console.error(exception);

        }

    } else {
      module.exports._build(applications);
    }

  },

  build: () => {

    const applications = [...config.applications];

    module.exports._build(applications);
  }
}