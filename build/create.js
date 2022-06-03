'use strict;'

const fs = require('fs');
const path = require("path")
const config = require("../config.json");

function create(application) {
    const destination = path.resolve(__dirname, '../', config.developmentDir, `${config.prefix}${application.folder}`);
    const templateDirectory = typeof application.masterTemplateDir !== "undefined"
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

        if(!destinationExists) {

            console.log('no exist');

            if (isSourceDirectory) {

                console.log('is source dir')
                console.log(src);
                console.log(dest);

                fs.mkdirSync(dest);
                fs.readdirSync(src).forEach(function (childItemName) {
                    copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
                });
            } else {
                console.log('is source file')
                console.log(src);
                console.log(dest);
                fs.copyFileSync(src, dest);
            }
        }
    }
};

config.applications
    .forEach(async application => {
        create(application);
    });