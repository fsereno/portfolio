const chalk = require('chalk');

const PROD = '--prod';
const DEV = '--dev';
const NAME = '--name';
const HELP = '--help';
const ANALYSIS = '--analysis';
const analysis = 'analysis'
const TEST = '--test';
const test = 'test';
const REMOVE = '--rm';

const help = `
You run this script by calling node and the script name - node (start/stop).js. This is already configured as a script via npm:

${chalk.yellow('> npm run (start/stop) -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run (start/stop) -- --help')}

These are the available options:

${chalk.yellow(PROD)} - ${chalk.green('This command allows you to target the production version of a container.')}

${chalk.yellow(DEV)} - ${chalk.green('This command allows you to target the development version of a container.')}

${chalk.yellow(NAME)} - ${chalk.green('This command is used by specifying the name of the application you want to target.')}

${chalk.yellow(ANALYSIS)} - ${chalk.green(`This command should be used in conjuction with ${NAME}. Use this to compose the webpack analysis container against an application.`)}

${chalk.yellow(TEST)} - ${chalk.green(`This command creates an ephemeral container and executes tests for this application`)}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    PROD,
    DEV,
    NAME,
    HELP,
    ANALYSIS,
    analysis,
    TEST,
    test,
    REMOVE,
    help
};