const chalk = require('chalk');
const constants = require('./constants.apps');
const helpers = require('./helpers.common');
const verbs = require('./verbs.apps');
const handlers = require('./handlers.common');
const hasSomeEphemeral = handlers.ifHasSome(verbs.ephemeral);
const attachmentMode = ( verbs.hasDev || verbs.hasAnalysis || verbs.hasTestDotnet || hasSomeEphemeral ) ? '' : '-d';

const getComposeFile = () =>
    `docker-compose${verbs.hasDev
        ? '.dev'
        : verbs.hasTestDotnet
            ? `.${constants.test_dotnet}`
            : ''
    }.yml`;

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
        const name = getName();
        const composeFile = `./docker/${name}/${getComposeFile()}`;
        const destroyCallback = hasSomeEphemeral ? () => helpers.run(`docker compose -f ${composeFile} down`) : undefined;
        const command = `docker compose -f ${composeFile} up ${attachmentMode}`;
        helpers.run(command, {}, destroyCallback);
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