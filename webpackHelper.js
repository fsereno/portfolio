const config = require("./config.json");

module.exports = {
    isProduction: () => process.env.npm_config_production,
    hasDirectory: () =>  {
        const dir = process.env.npm_config_dir;
        const hasDirectory = dir && dir.length > 0;
        const directory = hasDirectory ? dir.replace(config.prefix, "") : "";
        return [ hasDirectory, directory ];
    },
    getOutputDirectory: () => module.exports.isProduction() ? config.publishDir : config.developmentDir,
    getFullDirectoryPath: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,
    getMode: () => module.exports.isProduction() ? 'production' : 'development',
    getApplications: () => {

        const [ hasDirectory, directory] = module.exports.hasDirectory(process.env.npm_config_dir);

        let applications = [];

        if (hasDirectory) {
            applications = [...config.applications.filter(x => x.folder === directory)];
        } else {
            applications = [...config.applications];
        }

        return applications;
    }
}