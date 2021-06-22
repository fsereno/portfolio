
module.exports = {

  getDirectory: (config, application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,

  getEntry: (directory, entry) => {

    console.log("GET ENTRY")
    console.log(directory)
    console.log(entry)

    let result = `${directory}/${entry.replace("./", "")}`;

    console.log(result)

    return result;

  },

  getPublicPath: (config, application, path = "", env) => {

    let publicPath = path.replace("..", "");

    publicPath = env.production
      ? !application.useRoot ? `${config.prefix}${application.folder}/js/` : "js/"
      : publicPath;
      return publicPath;
  },

  collectWebPackConfigs: (config, env = { production: false }) => {

    let webpackConfigs = [];

    config.applications.forEach(application => {

      if (application.useWebpack) {

        const directory = module.exports.getDirectory(config, application);

        try {

          const webpackConfig = require(`${directory}/webpack.config`);

          const modifiedWebpackConfig = {...webpackConfig};

          modifiedWebpackConfig.mode = env.production ? "production" : "development";

          modifiedWebpackConfig.entry = module.exports.getEntry(directory, webpackConfig.entry);

          modifiedWebpackConfig.output.path = env.production
            ? webpackConfig.output.path.replace("app", "docs")
            : webpackConfig.output.path;

            modifiedWebpackConfig.output.publicPath = module.exports.getPublicPath(config, application, webpackConfig.output.publicPath, env);

          webpackConfigs.push(modifiedWebpackConfig);

        } catch (exception) {

          console.error(exception);

        }
      }
    });
    return webpackConfigs;
  }
}