const chalk = require('chalk');
const constants = require('./constants');
const helpers = require('./helpers');
const verbs = require('./verbs');

const dockerCompose = 'docker-compose';
const composeFile = verbs.hasDev ? `${dockerCompose}.dev.yml` : `${dockerCompose}.yml`;

const ifHasUnsupported = () => {
    if (helpers.args.filter(arg => arg.startsWith("--")).some(x => verbs.supported.indexOf(x) === -1)) {
        console.error(chalk.redBright('ERROR: Unsupported arguments detected.'));
        process.exit(1);
    }
}

const ifHasHelp = () => {
    if (verbs.hasHelp) {
        console.log(constants.help);
        process.exit(0);
    }
}

const runIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose up -d';
        console.log(chalk.yellowBright('Warning composing up for production:'));
        console.log(chalk.green('Running command: ' + command));
        helpers.run(command);
    }
}

const runIfHasEnvAndApp = () => {
    if (verbs.hasEnv && verbs.hasApp) {
        const env = helpers.get(constants.ENV);
        const app = helpers.get(constants.APP);
        const command = `docker compose --env-file ./docker/${app}/${env}.env -f ./docker/${app}/${composeFile} up -d`;
        console.log(chalk.green('Running command: ' + command));
        helpers.run(command);
    }
}

const runIfHasApp = () => {
    if (verbs.hasApp) {
        const app = helpers.get(constants.APP);
        const command = `docker compose -f ./docker/${app}/${composeFile} up -d`;
        console.log(chalk.green('Running command: ' + command));
        helpers.run(command);
    }
}

const stopIfHasProd = () => {
    if (verbs.hasProd) {
        const command = 'docker compose down';
        console.log(chalk.yellowBright('Warning composing down for production:'));
        console.log(chalk.green('Running command: ' + command));
        helpers.run(command);
    }
}

const stopIfHasApp = () => {
    if (verbs.hasApp) {
        const app = helpers.get(constants.APP);
        const command = `docker compose -f ./docker/${app}/${composeFile} down`;
        console.log(chalk.green('Running command: ' + command));
        helpers.run(command);
    }
}

module.exports = {
    ifHasUnsupported,
    ifHasHelp,
    runIfHasProd,
    runIfHasEnvAndApp,
    runIfHasApp,
    stopIfHasProd,
    stopIfHasApp
};