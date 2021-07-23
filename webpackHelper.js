const path = require('path');
const fs = require('fs');
const config = require("./config.json");
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    isProduction: (env) => env ? env.production : process.env.npm_config_production,
    hasDirectory: (env) =>  {
        const dir = env ? env.dir : process.env.npm_config_dir;
        const hasDirectory = dir && dir.length > 0;
        const directory = hasDirectory ? dir.replace(config.prefix, "") : "";
        return [ hasDirectory, directory ];
    },
    getFullDirectoryPath: (application) => `./${config.developmentDir}/${config.prefix}${application.folder}`,
    getMode: (env) => module.exports.isProduction(env) ? 'production' : 'development',
    getApplications: (env) => {
        const [ hasDirectory, directory] = module.exports.hasDirectory(env);
        let applications = config.applications.filter(x => x.useWebpack);
        if (hasDirectory) {
            applications = applications.filter(x => x.folder === directory);
        } else if (!hasDirectory && module.exports.isServe(env)) {
            applications = applications.filter(x => x.folder === config.entry);
        }
        return applications;
    },
    logNumberOfCompilingConfigs: (webpacks) => {
        console.log(chalk.blueBright("Compiling ") + webpacks.length + " applications...");
    },
    logAllCompiling: (webpacks) => {
        webpacks.forEach(config => {
            const entry = config.entry.main || 'vendor resources';
            console.log(chalk.yellow("Compiling: ") + entry);
        });
    },
    isServe: (env) => env && env.WEBPACK_SERVE,
    isBuild: (env) => env && env.WEBPACK_BUILD,
    getTemplateFiles: (application) => {
        const dir = path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'pug');
        const templateFiles = fs.readdirSync(dir);
        return templateFiles;
    },
    applicationIsRoot: (application) => application.useRoot,
    getTemplateFilename: (file) => file.split('.')[0],
    getTemplateFullFilePath: (application, file) => {
        const filename = module.exports.getTemplateFilename(file);
        const htmlFilePath = module.exports.applicationIsRoot(application)
            ? `${path.resolve(__dirname, 'dist')}/${filename}.html`
            : `${path.resolve(__dirname, 'dist', `${config.prefix}${application.folder}`)}/${filename}.html`
        return htmlFilePath;
    },
    getHtmlWebpackPluginObjects: (application) => {
        const templates = module.exports.getTemplateFiles(application);
        const htmlWebpackPluginConfigs = [];
        templates.forEach((file) => {
            const htmlFilePath = module.exports.getTemplateFullFilePath(application, file);
            const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
                template: "!!pug-loader!" + path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'pug', file),
                filename: htmlFilePath,
                locals: { config, application }
            });
            htmlWebpackPluginConfigs.push(htmlWebpackPluginConfig);
        });
        return htmlWebpackPluginConfigs;
    },
    getVendorWebpackConfig: (env, webpacks) => {
        if (module.exports.isBuild(env)) {
            const vendorWebpackConfig = require('./webpack.config.vendor')(env);
            webpacks.push(vendorWebpackConfig);
        }
    }
}