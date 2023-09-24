const chalk = require('chalk');

const NAME = '--name';
const DIR = '--dir';
const HELP = '--help';

const help = `
A task is a single, short lived operation. Containers are disposed of when the process is complete.

You run this script by calling node and the script name - node task.js. This is already configured as a script via npm:

${chalk.yellow('> npm run task -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run task -- --help')}

These are the available options:

${chalk.yellow(NAME)} - ${chalk.green('This command is used by specifying the name of the task you want to run.')}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    NAME,
    HELP,
    DIR,
    help
};