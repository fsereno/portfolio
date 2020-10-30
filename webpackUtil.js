
module.exports = {

  getDirectory: (config, application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,

  getEntry: (directory, entry) => `${directory}/${entry.replace("./", "")}`,

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
        let directory = module.exports.getDirectory(config, application);
        let webpackConfig;

        try {

          webpackConfig = require(`${directory}/webpack.config`);

          webpackConfig.mode = env.production ? "production" : "development";
          webpackConfig.entry = module.exports.getEntry(directory, webpackConfig.entry);
          webpackConfig.output.path = env.production
            ? webpackConfig.output.path.replace("app", "docs")
            : webpackConfig.output.path;
          webpackConfig.output.publicPath = module.exports.getPublicPath(config, application, webpackConfig.output.publicPath, env);

          webpackConfigs.push(webpackConfig);

        } catch (exception) {

          console.error(exception);

        }
      }
    });
    return webpackConfigs;
  }
}