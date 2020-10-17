module.exports = {
    getDirectory: (config, application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,
    getEntry: (directory, entry) => `${directory}/${entry.replace("./", "")}`,
    collectWebPackConfigs: (config) => {
      let webpackConfigs = [];
      config.applications.forEach(application => {
        if (!application.compileJs) {
          let directory = module.exports.getDirectory(config, application);
          let webpackConfig;
          try {
            webpackConfig = require(`${directory}/webpack.config`);
            webpackConfig.entry = module.exports.getEntry(directory,webpackConfig.entry);
            webpackConfigs.push(webpackConfig);
          } catch {
            webpackConfig = {}
          }
        }
      });
      return webpackConfigs;
    }
}