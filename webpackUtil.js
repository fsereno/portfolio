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
  _build: (application, applications) => {

    if (application.useWebpack) {

      const directory = module.exports.getDirectory(application);

      try {

          const webpackConfig = require(`${directory}/webpack.config`);
          const compiler = webpack(webpackConfig);

          console.log("Building: " + directory);

          compiler.run( (err, stats) => {

              if (err) {
                  console.error(err);
              }

              compiler.close(closeErr => {

                  if (closeErr) {
                      console.error(err);
                  } else {
                      console.log("Finished: " + directory);
                  }

              });
          });

        } catch (exception) {

          console.error(exception);

        }
    }

  },

  build: () => {

   /*const application1 = config.applications.filter(app => app.folder === "toDoReact")[0];
    const application2 = config.applications.filter(app => app.folder === "AzureDotNetCoreDataStructuresApi")[0];
    const application3 = config.applications.filter(app => app.folder === "basicEmailClientReactSpa")[0];
    const application4 = config.applications.filter(app => app.folder === "aframe")[0];
    const application5 = config.applications.filter(app => app.folder === "aframeComplex")[0];
    const application6 = config.applications.filter(app => app.folder === "dictionaryFinder")[0];

    const applications = [
      application1,
      application2,
      application3,
      application4,
      application5,
      application6
    ];*/

    const applications = [...config.applications];

    applications.forEach(application => {
      module.exports._build(application);
    });

    console.log("Starting build(s)...")
  }
}