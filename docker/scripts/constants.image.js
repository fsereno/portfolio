const chalk = require('chalk');

const DEV = '--dev';
const NAME = '--name';
const TAG = '--tag';
const HELP = '--help';

const help = `
Image will build a new image of the specified application.

You run this script by calling node and the script name - node image.js. This is already configured as a script via npm:

${chalk.yellow('> npm run image -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run image -- --help')}

These are the available options:

${chalk.yellow(DEV)} - ${chalk.green('use this to target the development version of a application.')}

${chalk.yellow(NAME)} - ${chalk.green('use this followed by the name of the task you want to run.')}

${chalk.yellow(TAG)} - ${chalk.green('use this to tag the image.')}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    DEV,
    NAME,
    TAG,
    HELP,
    help
};