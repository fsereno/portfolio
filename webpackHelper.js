const path = require('path');
const fs = require('fs');
const config = require("./config.json");
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    isProduction: (env) => env.production,
    isServe: (env) => env && env.WEBPACK_SERVE,
    isBuild: (env) => env && env.WEBPACK_BUILD,
    isAnalysis: (env) => env && env.analysis,
    getDevServerConfig: (webpackConfig, application, env) => {
        if (module.exports.isServe(env)) {
            const devServer = {
                contentBase: path.join(__dirname, config.publishDir),
                publicPath: `/${config.prefix}${application.folder}/js/`,
                port: 8080,
                host: '0.0.0.0',
                open: true,
                watchContentBase: true,
                overlay: true
            }
            webpackConfig = {...webpackConfig, ...{ devServer } }
        };
        return webpackConfig;
    },
    getAnalysisConfig: (plugins, env) => {
        if (module.exports.isAnalysis(env)) {
            plugins = [
                ...plugins,
                new BundleAnalyzerPlugin({
                    generateStatsFile: true,
                    analyzerMode: "server",
                    analyzerHost: '0.0.0.0',
                    analyzerPort: 8080
                })
            ]
        }
        return plugins;
    },
    hasDirectory: (env) =>  {
        const dir = env.dir;
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
        console.log(chalk.blueBright("Compiling ") + webpacks.length + " configurations...");
    },
    logAllCompiling: (webpacks) => {
        webpacks.forEach(config => {
            module.exports.logSingleCompiling(config);
        });
    },
    getEntry: (config) => config.entry.main || 'vendor resources',
    logSingleCompiling: (config) => {
        console.log(chalk.yellow("Compiling: ") + module.exports.getEntry(config));
    },
    logSingleCompleted: (config) => {
        console.log(chalk.green("Completed: ") + module.exports.getEntry(config));
    },
    logSingleError: (config) => {
        console.log(chalk.redBright("ERROR: ") + module.exports.getEntry(config));
    },
    logAnalysis: (env) => {
        if (module.exports.isAnalysis(env)) {
            console.log(chalk.redBright(`Running analysis at: http://${config.host}:${config.port}`));
        }
    },
    logDone: () => console.log(chalk.greenBright("All compilations complete!")),
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
            ? `${path.resolve(__dirname, config.publishDir)}/${filename}.html`
            : `${path.resolve(__dirname, config.publishDir, `${config.prefix}${application.folder}`)}/${filename}.html`
        return htmlFilePath;
    },
    getHtmlWebpackPluginObjects: (application) => {
        const templates = module.exports.getTemplateFiles(application);
        const htmlWebpackPluginConfigs = [];
        templates.forEach((file) => {
            const htmlFilePath = module.exports.getTemplateFullFilePath(application, file);
            const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
                template: path.resolve(__dirname, config.developmentDir, `${config.prefix}${application.folder}`, 'pug', file),
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