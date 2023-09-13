const chalk = require('chalk');

const DEV = '--dev';
const NAME = '--name';
const HELP = '--help';
const ANALYSIS = '--analysis';
const analysis = 'analysis'

const help = `
You run this script by calling node and the script name - node (start/stop).js. This is already configured as a script via npm:

${chalk.yellow('> npm run (start/stop) -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run (start/stop) -- --help')}

These are the available options:

${chalk.yellow(DEV)} - ${chalk.green('use this to target the development version of a container.')}

${chalk.yellow(NAME)} - ${chalk.green('use this followed by the name of the application you want to target.')}

${chalk.yellow(ANALYSIS)} - ${chalk.green(`should be used in conjuction with ${NAME}. Use this to compose the webpack analysis container against an application.`)}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    DEV,
    NAME,
    HELP,
    ANALYSIS,
    analysis,
    help
};