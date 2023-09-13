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

const getName = () => verbs.hasAnalysis ? constants.analysis : helpers.get(constants.NAME);

const startIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose up -d';
        console.log(chalk.yellowBright('Warning: composing up for production:'));
        helpers.run(command);
    }
}

const startIfHasName = () => {
    if (verbs.hasName) {
        const composeFile = getComposeFile();
        const name = getName();
        const env = helpers.get(constants.NAME);
        const command = `docker compose --env-file ./docker/${env}/.env -f ./docker/${name}/${composeFile} up ${attachmentMode}`;
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

const stopIfHasName = () => {
    if (verbs.hasName) {
        const composeFile = getComposeFile();
        const name = getName();
        const command = `docker compose -f ./docker/${name}/${composeFile} down`;
        helpers.run(command);
    }
}

module.exports = {
    startIfHasProd,
    startIfHasName,
    stopIfHasProd,
    stopIfHasName
};