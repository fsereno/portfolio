const chalk = require('chalk');
const constants = require('./constants.apps');
const helpers = require('./helpers.common');
const verbs = require('./verbs.apps');

const dockerCompose = 'docker-compose';
const composeFile = verbs.hasDev ? `${dockerCompose}.dev.yml` : `${dockerCompose}.yml`;
const attachmentMode = verbs.hasDev ? '' : '-d';

const startIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose up -d';
        console.log(chalk.yellowBright('Warning: composing up for production:'));
        helpers.run(command);
    }
}

const startIfHasEnvAndApp = () => {
    if (verbs.hasEnv && verbs.hasApp) {
        const app = helpers.get(constants.APP);
        const env = helpers.get(constants.ENV);
        const command = `docker compose --env-file ./docker/${app}/${env}.env -f ./docker/${app}/${composeFile} up ${attachmentMode}`;
        helpers.run(command);
    }
}

const startIfHasApp = () => {
    if (!verbs.hasEnv && verbs.hasApp) {
        const app = helpers.get(constants.APP);
        const command = `docker compose --env-file ./docker/${app}/${app}.env -f ./docker/${app}/${composeFile} up ${attachmentMode}`;
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
        const app = helpers.get(constants.APP);
        const command = `docker compose -f ./docker/${app}/${composeFile} down`;
        helpers.run(command);
    }
}

module.exports = {
    startIfHasProd,
    startIfHasEnvAndApp,
    startIfHasApp,
    stopIfHasProd,
    stopIfHasApp
};