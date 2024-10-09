'use strict;'

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const config = require('../config.json');

function create(application) {
    const destination = path.resolve(__dirname, '../', config.developmentDir, `${config.prefix}${application.folder}`);
    const templateDirectory = typeof application.masterTemplateDir !== 'undefined'
        && application.masterTemplateDir.length > 0
        ? application.masterTemplateDir
        : config.masterTemplateDir;
    const source = path.resolve(__dirname, '../', config.developmentDir, `${config.prefix}${templateDirectory}`);

    copyRecursiveSync(source, destination);
}

function copyRecursiveSync(src, dest) {
    const sourceExists = fs.existsSync(src);
    const sourceStats = sourceExists && fs.lstatSync(src);
    const isSourceDirectory = sourceExists && sourceStats.isDirectory();

    if (sourceExists) {
        const destinationExists = fs.existsSync(dest);
        if (!destinationExists) {
            console.log(chalk.blue('Copying ') + src);
            if (isSourceDirectory) {
                console.log(chalk.yellow('Creating ') + dest);
                fs.mkdirSync(dest);
                fs.readdirSync(src).forEach(function (childItemName) {
                    copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
                });
                console.log(chalk.green('Created ') + dest);
            } else {
                fs.copyFileSync(src, dest);
            }
        }
    }
};

module.exports = {
    create: () => {
        config.applications
            .forEach(async application => {
                create(application);
            });
    }
}