const config = require("./config.json");
const chalk = require('chalk');

module.exports = {
    isProduction: (env) => env ? env.production : process.env.npm_config_production,
    hasDirectory: (env) =>  {
        const dir = env ? env.dir : process.env.npm_config_dir;
        const hasDirectory = dir && dir.length > 0;
        const directory = hasDirectory ? dir.replace(config.prefix, "") : "";
        return [ hasDirectory, directory ];
    },
    getOutputDirectory: (env) => module.exports.isProduction(env) ? config.publishDir : config.developmentDir,
    getFullDirectoryPath: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,
    getMode: (env) => module.exports.isProduction(env) ? 'production' : 'development',
    getApplications: (env) => {

        const [ hasDirectory, directory] = module.exports.hasDirectory(env);

        let applications = config.applications.filter(x => x.useWebpack);

        if (hasDirectory) {
            applications = applications.filter(x => x.folder === directory);
        }

        return applications;
    },
    logCompiled: (directory, stamp) => {

        let message = `${chalk.green("Compiled:")} ${directory}`;

        if (stamp) {
          message += ` ${stamp}`;
        }

        console.log(message);
    },
    isServe: (env) => env.WEBPACK_SERVE
}