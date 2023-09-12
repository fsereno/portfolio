const chalk = require('chalk');
const constants = require('./constants.apps');
const helpers = require('./helpers.common');
const verbs = require('./verbs.apps');

const attachmentMode = ( verbs.hasDev || verbs.hasAnalysis ) ? '' : '-d';

const getComposeFile = () => {
    const dockerCompose = 'docker-compose';
    let command = `${dockerCompose}.yml`;
    if (verbs.hasDev) {
        command = `${dockerCompose}.dev.yml`;
    }
    return command;
}

const getApp = () => verbs.hasAnalysis ? constants.analysis : helpers.get(constants.APP);

const startIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose up -d';
        console.log(chalk.yellowBright('Warning: composing up for production:'));
        helpers.run(command);
    }
}

const startIfHasApp = () => {
    if (verbs.hasApp) {
        const composeFile = getComposeFile();
        const app = getApp();
        const env = helpers.get(constants.APP);
        const command = `docker compose --env-file ./docker/${env}/.env -f ./docker/${app}/${composeFile} up ${attachmentMode}`;
        helpers.run(command);
    }
}

const stopIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose down';
        console.log(chalk.yellowBright('Warning composing down for production:'));
        helpers.run(command);
    }
}

const stopIfHasApp = () => {
    if (verbs.hasApp) {
        const composeFile = getComposeFile();
        const app = getApp();
        const command = `docker compose -f ./docker/${app}/${composeFile} down`;
        helpers.run(command);
    }
}

module.exports = {
    startIfHasProd,
    startIfHasApp,
    stopIfHasProd,
    stopIfHasApp
};